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

namespace defineSpace {
  type E = Exclude<string | number, string>; // 排除string类型的键值对
  const e: E = 10;

  type E2 = Extract<string | number | null, string>; // Extract 提取要制定的类型
  const d2: E2 = "jakeQuc";

  type E3 = NonNullable<string | number | undefined | null>; // NonNullable: 去除空
  const e3: E3 = "test";
  let e4: E3 = 23;

  const getUserInfo = () => {
    return { name: "jakeQuc", age: 10 };
  };

  type UserInfo = ReturnType<typeof getUserInfo>;
  const user: UserInfo = {
    name: "keHao",
    age: 23,
  };

  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  type P = InstanceType<typeof Person>;
  type PersonType = InstanceType<typeof Person>;
  const p: PersonType = new Person("test");
}
