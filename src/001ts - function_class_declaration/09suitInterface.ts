/**
 * TS中
 * 在ts中跟类型没有关系，只跟属性有关系，我要的你有就可以，我要的你没有就不行
 * 我定义的类型你都有就ok，多了也没有关系，这就是接口的兼容性
 *
 * 范型兼容性： 范型在判断兼容性的时候会先判断具体的类型，然后在进行兼容性判断
 */

namespace SuitInterface {
  // 接口兼容性
  interface Animal {
    name: string;
    age: number;
  }

  interface Person {
    name: string;
    age: number;
    speak: (words: string) => void;
    // speak(words: string): void;
    // 也可以这样写 speak: (words: string) => void;
  }

  const getName = (animal: Animal): string => {
    return animal.name;
  };

  const p: Person = {
    name: "jakeQuc",
    age: 10,
    speak: (words: string) => {
      console.log(words);
    },
  };

  // 在ts中跟类型没有关系，只跟属性有关系，我要的你有就可以，我要的你没有就不行
  console.log(getName(p));

  let num: string | number;
  const str: string = "hello";

  //  把具体的付给联合类型
  num = str;
  num = 1;

  let stringOb: {
    toString(): string;
  } = { toString: () => "name" };
  console.log("stringOb", stringOb);

  stringOb = "jakequc"; // 这里可以赋值是因为大多数都会有toString这个方法
}

namespace SuitClassSpace {
  // 类的兼容性
  class Animal {
    name: string;
  }

  class Bird extends Animal {
    swing: number;
  }

  let a: Animal;
  a = new Bird(); // 子类有的，父亲一定有

  // 一般来说子类的变量不能定义父类的实例
}

namespace SuitFunctionSpace {
  // 函数的兼容性，如果变量执行的函数表达 返回值类型和参数类型,参数不一定相同，则可以进行相互的复制

  type SumFunction = (a: number, b: number) => number;

  let sumFun: SumFunction;

  const f1 = (a: number, b: number): number => {
    return a + b;
  };

  const f2 = (a: number): number => {
    return a;
  };

  const f3 = (): number => {
    return 1;
  };

  // 这便是函数的兼容行啦, 参数少能少不能多
  sumFun = f1;
  sumFun = f2;
  sumFun = f3;

  // 比较返回值类型
  // 这里是定义类型
  type GetPerson = () => { name: string; age: number };

  let getPerson: GetPerson;
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

  // 函数的双向协便
  type DoubleFun = (a: number | string) => void;
  let dFun: DoubleFun;
  const d1 = (a: number | string | boolean) => {
    console.log(a);
  };

  dFun = d1;
  // 但是调用dFun(true)； 会报错
  d1(true);
}

namespace SuitGenericsSpace {
  // 范型兼容性
  // 判断兼容性的时候，先判断具体的类型，在进行兼容性判断
  interface Empty<T> {}

  let e1!: Empty<string>; // ! 非空断言
  let e2!: Empty<number>;
  e1 = e2;

  interface NotEmptyString<T> {
    data: string;
  }
  interface NotEmptyNumber<T> {
    data: number;
  }

  // 枚举的兼容性
  // 枚举类型与数字类型兼容，且数字类型与枚举兼容，不同枚举之间是不兼容的
  enum Colors {
    Red,
    Yellow,
  }
  let c: Colors;
  c = Colors.Red;
  c = 1; // 枚举与数字兼容， 因为这里枚举的值对应的是一个数字
  // c = "1"; // 不兼容，因为枚举的值对应的不是一个数字，所以不兼容

  // 枚举值可以赋值给数字
  let n: number;
  n = 1;
  n = Colors.Red;
}
