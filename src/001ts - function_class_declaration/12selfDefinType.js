"use strict";
/**
 * 内置条件类型
 * Ts在内部设置了一些常用的条件类型， 可以在lib.es5.ts 中查看
 * 1. Exclude： 从T可以分配给的类型中排除U
 * type E = Exclude<string | number, string>; // 从string或者是number中排除掉string，这样就只剩下number了
 * const e: E = 10;
 *
 * 2. Extract： 从T可分配的类型中提取出U
 * type E = Extract<string | number, string>; // 从string或者是number中提取出string类型
 * const e : E = "1"
 *
 * 3. NonNullable： 从 T 中排除T和null还有undefined
 *  type E = NonNullable<string | number | null | undefined>;
 *  const e: E = null;
 *
 * 4. ReturnType<typeof functionName> 返回函数返回的类型
 *
 * 5. InstanceType 获取构造函数的实例类型
 */
var defineSpace;
(function (defineSpace) {
    const e = 10;
    const d2 = "jakeQuc";
    const e3 = "test";
    let e4 = 23;
    const getUserInfo = () => {
        return { name: "jakeQuc", age: 10 };
    };
    const user = {
        name: "keHao",
        age: 23,
    };
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    const p = new Person("test");
})(defineSpace || (defineSpace = {}));
