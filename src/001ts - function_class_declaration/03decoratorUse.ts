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

// 1. 类装饰器
namespace a {
  interface Person {
    personName: string;
    age: number;
  }

  function enhancer(target: any) {
    // target 是被装饰的构造函数， 在原型上添加属性或者方法就是再给类的实例添加属性或方法
    // target.xxx 是给类添加静态属性或者方法
    target.prototype.personName = "new Name";
    target.age = 23;
  }

  @enhancer
  class Person {
    static age: any;
    constructor() {}
  }

  const p = new Person();
  console.log("在装饰器中给类扩展静态属性, age: ", Person.age);
  console.log("在装饰器中扩展 类的实例的属性personName", p.personName);
}

// 2. 类装饰器 =》 重写构造函数: 即在类的构造函数中返回一个新的类即可
namespace b {
  interface Person {
    age: number;
  }

  function enhancer(ClassConstructor: any) {
    // 这里可以返回一个继承父类的类 target就是被装饰器装饰器的类,是对装饰的类进行一个增强
    return class Children extends ClassConstructor {
      public age: number = 10; // 这是被装饰器enhancer装饰的类的新的构造函数
    };
  }

  @enhancer
  class Person {
    constructor() {}
  }

  const p = new Person(); // 这里的Person其实是在装饰器里被重写的构造函数

  console.log("在装饰器中 重写构造函数：", p.age);
}

// 属性装饰器
namespace c {
  // 如果被装饰的属性的是一个普通属性，target就是指向类的原型
  // 如果被装饰的属性是static，那么target指向类的定义
  function upperCase(target: any, propertyName: string) {
    let value = target[propertyName];
    const getter = () => value;
    const setter = (newValue: string) => {
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
  function propertyEnumerable(flag: boolean) {
    // 返回一个属性装饰器
    return function (target: any, propertyName: string) {};
  }

  function setAge(age: number) {
    return function (
      target: any,
      methodName: string,
      propertyDescriptor: PropertyDescriptor
    ) {
      console.log("methodName: ", methodName);
      target.age = age;
    };
  }

  // 这个函数返回一个函数装饰器
  function methodEnumerable(flag: boolean) {
    // 返回一个函数装饰器
    return function (
      target: any,
      methodName: string,
      propertyDescriptor: PropertyDescriptor
    ) {
      propertyDescriptor.enumerable = flag;
    };
  }

  function toNumber(
    target: any,
    method: string,
    propertyDescriptor: PropertyDescriptor
  ) {
    console.log("propertyDescriptor:", propertyDescriptor);
    let oldMethod = propertyDescriptor.value; // 得到原来的方法
    propertyDescriptor.value = function (...args: any[]) {
      args = args.map((item) => parseFloat(item));
      // this 指的是target
      return oldMethod.apply(this, args);
    };
  }

  class Person {
    static age: number;
    @upperCase // 这个属性装饰器将被装饰的属性的值进行改变
    @propertyEnumerable(false)
    name: string = "jakequc";

    @methodEnumerable(true)
    getName() {
      console.log("getName");
    }

    @setAge(100)
    static getAge() {
      console.log("getAge....");
    }

    @toNumber
    sum(...args: any[]) {
      return args.reduce((acc, curr) => acc + curr, 0);
    }
  }

  const p = new Person();
  console.log("name: ==== ", p.name);
  console.log("sum 函数: ==== ", p.sum(1, "2", "3"));

  for (const attr in p) {
    console.log("attr = ", attr);
  }

  console.log("Person.age: ", Person.age);
}

namespace d {
  /**
   *
   * @param target 所在类的原型 Person.prototype
   * @param methodName 参数所在的参数名字
   * @param paramsIndex 参数所在的位置 （0, 1, ... , n);
   */

  function addChange(target: any, methodName: string, paramsIndex: number) {
    target.changePassword = "changePassword" + Math.random() * 100;
  }

  interface Person {
    changePassword: string;
  }
  // 参数装饰器 方法参数
  class Person {
    login(username: string, @addChange password: string) {
      console.log(username, password, this.changePassword);
    }
  }

  const p = new Person();
  p.login("quc", "quc-password");
}
