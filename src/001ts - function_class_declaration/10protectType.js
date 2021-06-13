"use strict";
/**
 * 保护类型： 保护类型就是一些表达式，确保类型是正确的，保护类型就是能够通过关键字判断出分支中的类型
 *
 *  自定义类型一般是两个类型的变量名字相同，不能够通过成员来判断是不是该类型
 *
 * 自定义保护类型: TS里的类型保护本质上就是一些表达式，他们会在运行时检查类型信息，确保在某个作用域里的类型是符合 预期的
 * 要自定义一个类型保护，只需要简单的为这个类型保护定义一个函数即可，这个函数的返回值是一个类型谓词（propertyName is InterfaceName)
 * 类型谓词的语法为： parameterName is Type 这种类型，其中parameterName必须是当前函数签名里的一个参数
 */
function double(input) {
    // 如果直接调用input. 只能够调用他们三的共同方法valueOf或者是toString方法
    // 通过判断语句来进行类型的保护，确定我们可以调用他们拥有的特定的方法
    switch (typeof input) {
        case "number":
            return input.toFixed(2);
        case "string":
            return input.toLocaleUpperCase();
        case "boolean":
            return input.valueOf();
    }
}
var OptionAndUnionSpace;
(function (OptionAndUnionSpace) {
    // 可选链操作符号 ?.
    const obj = { name: 1, say: () => console.log("say") };
    // obj?.name； 先判断obj是否为null或者undefined，如果是的话就直接返回null或者是undefined，如果不是就尝试去调用obj下的属性name
    // obj?.say()； 同理
    const arr = [23];
    console.log(arr === null || arr === void 0 ? void 0 : arr[0]); // 如果arr不为null或者undefined，就返回arr[0]
    const fun = () => console.log("fun");
    console.log(fun === null || fun === void 0 ? void 0 : fun()); // 如果fun不为null或者undefined，就调用fun()
    function getBtn(button) {
        if (button.class === "warning")
            console.log(button.text1);
        else
            console.log(button.text2);
    }
    const getNumber = (x) => {
        if ("swing" in x) {
            x.swing;
        }
        else {
            x.leg;
        }
    };
})(OptionAndUnionSpace || (OptionAndUnionSpace = {}));
// 自定义类型保护
var DivideSpace;
(function (DivideSpace) {
    // 自定义类型保护
    const isBird = (x) => {
        return x.legs === 2;
    };
    const getAnimal = (x) => {
        // 自定义类型保护
        if (isBird(x))
            console.log("this is a ", x.name1);
        else
            console.log("this is a ", x.name2);
    };
    const x = { name1: "Bird", legs: 2 };
    getAnimal(x);
})(DivideSpace || (DivideSpace = {}));
