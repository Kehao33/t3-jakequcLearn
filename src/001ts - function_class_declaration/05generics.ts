/***
 * Generics(范型）是指在定义函数/接口或者类的时候，不育险指定具体的类型，而在使用的时候再指定类型的一种特性
 * 范型 T 作用域只限于函数内部使用
 *  定义范型的时候并不知道，只有在创建的时候为其定义类型
 *
 * 作用函数的意义：实现函数的复用，类的复用
 */

/**
 * 断言的方式有两种 variable as type  / <type> variable
 * eg: a as number 或者 <number>a
 *
 * 默认范型
 * const addSelf = <T = number>(a:T):T => {
 *  return a;
 * }
 *
 *
 * 范型约束
 * 在函数使用范型的时候，由于预先并不知道具体的类型，
 * 所以要不能访问相应的类型方法，这个时候我们就需要用到范型约束
 *
 *  范型类型别名,type 可以定义类型别名和类型
 *  type Cart<T> = {list:T[]} | T[];
 *
 *  interface和type定义的类型别名的区别
 *  interface 定义一个试试在在的接口，用来描述真正的类型
 *  type一般用来定义类型别名，范型类型别名可以表达更复杂的类型
 *
 *  接口创建了一个新的名字，可以在任意地方被调用，类型别名不是创建新的名字，报错的时候不会使用类型别名
 * 类型别名不能被extends 和 implements，这时我们应该尽量使用接口代替类型别名
 * 当我们需要使用联合类型或者元祖类类型的时候，类型别名会更适合
 *
 *
 *
 */

namespace genericsSpace {
  function createArray<T>(len: number, val: T): T[] {
    //定义的时候并不知道范型是什么类型的
    const result: T[] = [];
    for (let i = 0; i < len; i++) {
      result[i] = val;
    }

    return result;
  }

  const res = createArray<string>(3, "e"); // 指定范型的类型为string
  console.log("res: ", res);

  const res2 = createArray<number>(4, 23);
  console.log(res2, "<<res2");

  /**
   * 类数组： 比如arguments，获取根据target，className来获取dom元素
   */

  function sum(...arg: any[]) {
    const args: IArguments = arguments;
    for (let i = 0; i < args.length; i++) {
      console.log("args[i]: ", args[i]);
    }
  }

  sum(1, 2, 3);
}

// 自定义范型类
namespace GenericsClass {
  class MyArray<T> {
    private list: T[] = [];
    add(val: T) {
      this.list.push(val);
    }

    getMax(): T {
      let max = this.list[0];
      for (const val of this.list) {
        max = max < val ? val : max;
      }

      return max;
    }
  }

  const arr = new MyArray<number>();
  arr.add(1);
  arr.add(8);
  arr.add(3);
  console.log("max value is: ", arr.getMax());

  const arrStr = new MyArray<string>();
  arrStr.add("a");
  arrStr.add("b");
  arrStr.add("f");
  arrStr.add("F");
  console.log("max value is: ", arrStr.getMax());
}

// 接口范型
/**
 * 断言的方式有两种 variable as type  / <type> variable
 * eg: a as number 或者 <number>a
 */
namespace GenericsInterfaceSpace {
  interface Calculate {
    <T>(a: T, b: T): T;
  }

  let add: Calculate = <T>(a: T, b: T): T => {
    return a;
  };

  console.log("add<number>(1,2): ", add<number>(1, 2));
}

namespace swapSpace {
  const swap = <T, F>(tuple: [T, F]): [F, T] => {
    return [tuple[1], tuple[0]];
  };

  let a: number = 1,
    b: number = 2;
  [b, a] = swap([a, b]); // 不借助第三变量来交换两个数值

  // 默认范型

  const getLen = <T = string>(arg: T): number => {
    return String(arg).length;
  };

  const len = getLen<number>(23432);
  // 如果不给范型函数指定类型，则ts会默认推断其类型

  // 类型约束，在函数中使用范型作为参数或者返回值的时候，由于预先并不知道具体的类型，
  // 所以不能访问具体的类型方法，这个时候我们就需要使用到类型约束，即对范型进行继承
  interface LengthWise {
    length: number;
  }

  function logger<T extends LengthWise>(val: T): void {
    console.log(val.length);
  }

  logger("类型约束，其实就是范型继承接口来实现约束");

  // 范型接口
  interface Cart<T> {
    list: T[];
  }

  const cart: Cart<string> = {
    list: ["1", "2", "str"],
  };

  // 范型类型别名
  type Boat<T> = { list: T[] } | T[];
  const c1: Boat<string> = { list: ["2"] };
  const b2: Boat<string> = ["2", "3"];
}
