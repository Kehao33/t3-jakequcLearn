"use strict";
/**
 * 装饰器篇 => 装饰器就是函数，实现一些对装饰的对象的扩展功能
 * 1. 类装饰器在类声明之前调用，用来监视，修改或者是替换类的定义,扩展类的属性
 *
 * 2. 属性装饰器  propertyDecoratorFunction(target:any, propertyName: string){};
 *    如果被装饰的属性的是一个普通属性，target就是指向类的原型
 *    如果被装饰的属性是static，那么target指向类的定义
 *
 * 3. 函数装饰器 methodDecoratorFunction(target: any, methodName:string, propertyDescriptor: PropertyDescriptor){}
 *
 * 4. 参数装饰器
 *    用来装饰函数的参数的
 *
 * 装饰器的执行顺序
 *  属性方法先执行， 谁先写谁限制性
 *  方法的时候，先参数装饰器然后才是方法装饰器
 *  最后是类装饰器
 *
 *  同类型的参数 =》 顺序从右到左 如： (@par1 par1, @par2 par2) => {} 先@par2执行，然后再@par1执行
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1. 类装饰器
var a;
(function (a) {
    function enhancer(target) {
        // target 是被装饰的构造函数， 在原型上添加属性或者方法就是再给类的实例添加属性或方法
        // target.xxx 是给类添加静态属性或者方法
        target.prototype.personName = "new Name";
        target.age = 23;
    }
    let Person = class Person {
        constructor() { }
    };
    Person = __decorate([
        enhancer
    ], Person);
    const p = new Person();
    console.log("在装饰器中给类扩展静态属性, age: ", Person.age);
    console.log("在装饰器中扩展 类的实例的属性personName", p.personName);
})(a || (a = {}));
// 2. 类装饰器 =》 重写构造函数: 即在类的构造函数中返回一个新的类即可
var b;
(function (b) {
    function enhancer(ClassConstructor) {
        // 这里可以返回一个继承父类的类 target就是被装饰器装饰器的类,是对装饰的类进行一个增强
        return class Children extends ClassConstructor {
            constructor() {
                super(...arguments);
                this.age = 10; // 这是被装饰器enhancer装饰的类的新的构造函数
            }
        };
    }
    let Person = class Person {
        constructor() { }
    };
    Person = __decorate([
        enhancer
    ], Person);
    const p = new Person(); // 这里的Person其实是在装饰器里被重写的构造函数
    console.log("在装饰器中 重写构造函数：", p.age);
})(b || (b = {}));
// 属性装饰器
var c;
(function (c) {
    // 如果被装饰的属性的是一个普通属性，target就是指向类的原型
    // 如果被装饰的属性是static，那么target指向类的定义
    function upperCase(target, propertyName) {
        let value = target[propertyName];
        const getter = () => value;
        const setter = (newValue) => {
            value = newValue.toLocaleUpperCase();
        };
        // 覆盖掉原来的属性
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    }
    // 这个函数返回一个属性装饰器
    function propertyEnumerable(flag) {
        // 返回一个属性装饰器
        return function (target, propertyName) { };
    }
    function setAge(age) {
        return function (target, methodName, propertyDescriptor) {
            console.log("methodName: ", methodName);
            target.age = age;
        };
    }
    // 这个函数返回一个函数装饰器
    function methodEnumerable(flag) {
        // 返回一个函数装饰器
        return function (target, methodName, propertyDescriptor) {
            propertyDescriptor.enumerable = flag;
        };
    }
    function toNumber(target, method, propertyDescriptor) {
        console.log("propertyDescriptor:", propertyDescriptor);
        let oldMethod = propertyDescriptor.value; // 得到原来的方法
        propertyDescriptor.value = function (...args) {
            args = args.map((item) => parseFloat(item));
            // this 指的是target
            return oldMethod.apply(this, args);
        };
    }
    class Person {
        constructor() {
            this.name = "jakequc";
        }
        getName() {
            console.log("getName");
        }
        static getAge() {
            console.log("getAge....");
        }
        sum(...args) {
            return args.reduce((acc, curr) => acc + curr, 0);
        }
    }
    __decorate([
        upperCase // 这个属性装饰器将被装饰的属性的值进行改变
        ,
        propertyEnumerable(false)
    ], Person.prototype, "name", void 0);
    __decorate([
        methodEnumerable(true)
    ], Person.prototype, "getName", null);
    __decorate([
        toNumber
    ], Person.prototype, "sum", null);
    __decorate([
        setAge(100)
    ], Person, "getAge", null);
    const p = new Person();
    console.log("name: ==== ", p.name);
    console.log("sum 函数: ==== ", p.sum(1, "2", "3"));
    for (const attr in p) {
        console.log("attr = ", attr);
    }
    console.log("Person.age: ", Person.age);
})(c || (c = {}));
var d;
(function (d) {
    /**
     *
     * @param target 所在类的原型 Person.prototype
     * @param methodName 参数所在的参数名字
     * @param paramsIndex 参数所在的位置 （0, 1, ... , n);
     */
    function addChange(target, methodName, paramsIndex) {
        target.changePassword = "changePassword" + Math.random() * 100;
    }
    // 参数装饰器 方法参数
    class Person {
        login(username, password) {
            console.log(username, password, this.changePassword);
        }
    }
    __decorate([
        __param(1, addChange)
    ], Person.prototype, "login", null);
    const p = new Person();
    p.login("quc", "quc-password");
})(d || (d = {}));
