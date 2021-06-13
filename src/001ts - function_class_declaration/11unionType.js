"use strict";
/**
 *
 * 交叉类型就是 使用 &， 将两者的类型并集在一起，使得被约束的类型可以同时拥有这两者类型的成员
 * Partial<TypName>可以让TypeName里的成员都变成可选； 而Required则相反，将可选的属性都变成必需的
 * Readonly<T> 可以让T的每个属性变成是只读不可更改的
 * Pick 能够帮助我们从传入的属性中摘取某一项返回
 *
 *
 * typeof 可以获取一个变量的类型,返回一个新的类型，可以使用type 定义一个变量来接受
 *
 * 索引访问操作符： [], 可以使用[]来获取一个类型的子类型
 * keyof InterName => 可以获取到InterName的键对应的类型的集合， 可以使用type 定义一个变量来接受
 *
 *
 * 映射类型，在定义的时候用in操作符号定义
 * example:
 * interface InterType {
 *  name: string;
 *  age: number;
 * }
 *
 * type MapType = {
 *  [key in keyof InterType]?: InterType[key]
 * }
 *
 * type Condition<T> = T extends Fish ? Water : Sky;
 * const condition: Condition<Fish2> = {
 *  name2: "water"
 * }
 */
var CrossTypeSpace;
(function (CrossTypeSpace) {
    const p = {
        name: "BirdName",
        fly() { },
        eat() { },
    };
    const p2 = {
        name: "p2name",
        fly() {
            console.log("我会飞");
        },
    };
})(CrossTypeSpace || (CrossTypeSpace = {}));
var TypeOfSpace;
(function (TypeOfSpace) {
    const p = {
        name: "personName",
        age: 10,
    };
    //  使用typeof来获取一个对象的属性的类型
    console.log(typeof p.name);
    // 使用typeof来获取一个对象的类型
    const box = {
        width: 123,
        height: 800,
    };
    const box2 = {
        width: 23,
        height: 123,
    };
    console.log("use typeof variable generate a new Type: ", box2);
    const jobName = "Job Name";
    const interestsName = "basketball";
    const person2 = {
        name: "person2",
        age: 23,
        gender: "male",
    };
    function getValueByKey(obj, key) {
        return obj[key];
    }
    console.log("person2 getValueByKey", getValueByKey(person2, "age"));
    const p4 = {
        name: "章3",
        age: 23,
    };
    const p5 = {
        name: "p5 name",
        age: 23,
        gender: "female",
    };
})(TypeOfSpace || (TypeOfSpace = {}));
var ReadonlyAndPickSpace;
(function (ReadonlyAndPickSpace) {
    const person1 = {
        name: "jake",
        age: 23,
    };
    const animal = {
        name: "jakeQuc",
        age: 23,
    };
    const p = {
        name: "person name",
    };
})(ReadonlyAndPickSpace || (ReadonlyAndPickSpace = {}));
