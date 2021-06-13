"use strict";
/**
 * TS中
 * 在ts中跟类型没有关系，只跟属性有关系，我要的你有就可以，我要的你没有就不行
 * 我定义的类型你都有就ok，多了也没有关系，这就是接口的兼容性
 *
 * 范型兼容性： 范型在判断兼容性的时候会先判断具体的类型，然后在进行兼容性判断
 */
var SuitInterface;
(function (SuitInterface) {
    const getName = (animal) => {
        return animal.name;
    };
    const p = {
        name: "jakeQuc",
        age: 10,
        speak: (words) => {
            console.log(words);
        },
    };
    // 在ts中跟类型没有关系，只跟属性有关系，我要的你有就可以，我要的你没有就不行
    console.log(getName(p));
    let num;
    const str = "hello";
    //  把具体的付给联合类型
    num = str;
    num = 1;
    let stringOb = { toString: () => "name" };
    console.log("stringOb", stringOb);
    stringOb = "jakequc"; // 这里可以赋值是因为大多数都会有toString这个方法
})(SuitInterface || (SuitInterface = {}));
var SuitClassSpace;
(function (SuitClassSpace) {
    // 类的兼容性
    class Animal {
    }
    class Bird extends Animal {
    }
    let a;
    a = new Bird(); // 子类有的，父亲一定有
    // 一般来说子类的变量不能定义父类的实例
})(SuitClassSpace || (SuitClassSpace = {}));
var SuitFunctionSpace;
(function (SuitFunctionSpace) {
    // 函数的兼容性，如果变量执行的函数表达 返回值类型和参数类型,参数不一定相同，则可以进行相互的复制
    let sumFun;
    const f1 = (a, b) => {
        return a + b;
    };
    const f2 = (a) => {
        return a;
    };
    const f3 = () => {
        return 1;
    };
    // 这便是函数的兼容行啦, 参数少能少不能多
    sumFun = f1;
    sumFun = f2;
    sumFun = f3;
    let getPerson;
    const gp1 = () => {
        return { name: "gp1", age: 23 };
    };
    getPerson = gp1;
    const gp2 = () => {
        return { name: "gp2" };
    };
    // getPerson = gp2; 返回的对象的类型少了age所以不行
    const gp3 = () => {
        return { name: "gp3", age: 23, home: "chengDu" };
    };
    getPerson = gp3;
    let dFun;
    const d1 = (a) => {
        console.log(a);
    };
    dFun = d1;
    // 但是调用dFun(true)； 会报错
    d1(true);
})(SuitFunctionSpace || (SuitFunctionSpace = {}));
var SuitGenericsSpace;
(function (SuitGenericsSpace) {
    let e1; // ! 非空断言
    let e2;
    e1 = e2;
    // 枚举的兼容性
    // 枚举类型与数字类型兼容，且数字类型与枚举兼容，不同枚举之间是不兼容的
    let Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Yellow"] = 1] = "Yellow";
    })(Colors || (Colors = {}));
    let c;
    c = Colors.Red;
    c = 1; // 枚举与数字兼容， 因为这里枚举的值对应的是一个数字
    // c = "1"; // 不兼容，因为枚举的值对应的不是一个数字，所以不兼容
    // 枚举值可以赋值给数字
    let n;
    n = 1;
    n = Colors.Red;
})(SuitGenericsSpace || (SuitGenericsSpace = {}));
