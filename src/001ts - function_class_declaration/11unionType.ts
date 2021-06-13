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

namespace CrossTypeSpace {
  interface Bird {
    name: string;
    fly(): void;
  }

  interface Person {
    name: string;
    eat(): void;
  }

  // 交叉类型就是这两个接口类型的并集

  type BirdMan = Bird & Person;
  const p: BirdMan = {
    name: "BirdName",
    fly() {},
    eat() {},
  };

  // 使交叉类型的成员可选 Partial关键字
  type PartialBirdMan = Partial<BirdMan>;
  const p2: PartialBirdMan = {
    name: "p2name",
    fly() {
      console.log("我会飞");
    },
  };
}

namespace TypeOfSpace {
  // typeof 可以获取一个变量的类型
  type Person = {
    name: string;
    age: number;
  };

  const p: Person = {
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

  type BoxType = typeof box;
  const box2: BoxType = {
    width: 23,
    height: 123,
  };
  console.log("use typeof variable generate a new Type: ", box2);

  // 索引访问操作符号，可以通过[]来获取某个变量
  interface PersonInter {
    name: string;
    age: number;
    job: {
      name: string;
    };
    interests: {
      name: string;
      num: number;
    }[];
  }

  const jobName: PersonInter["job"]["name"] = "Job Name";
  const interestsName: PersonInter["interests"][0]["name"] = "basketball";

  // typeof 索引类型查询操作符

  interface PersonInter2 {
    name: string;
    age: number;
    gender: "male" | "female";
    // [propName: string]: any;
  }

  const person2: PersonInter2 = {
    name: "person2",
    age: 23,
    gender: "male",
  };
  // ++++++++++++ typeof +++++++++++++++++++++++++++++++++++++
  // type PersonInter2KeyType = "name" | "age" | "gender";
  // 以上的写法等效于下面的写法
  type PersonInter2keyOf = keyof PersonInter2;
  function getValueByKey(obj: PersonInter2, key: PersonInter2keyOf): any {
    return obj[key];
  }

  console.log("person2 getValueByKey", getValueByKey(person2, "age"));

  // ++++++++++++ 映射类型 in 来批量操作定义 +++++++++++++++++++++++++++++++++++++
  // 映射类型，在定义的时候用in操作符号定义
  interface PersonInter3 {
    name: string;
    age: number;
    gender: "male" | "female";
  }

  type PartialPerson = {
    [key in keyof PersonInter3]?: PersonInter3[key]; //  PersonInter3[key]得到key的类型
  };

  // 上边的定义等效于 type PartialPerson = Partial<PersonInter3>

  type MyPartial<T> = {
    // 实现Partial的原理s
    [key in keyof T]?: T[key];
  };

  type MyRequired<T> = {
    // 手动实现Required
    [key in keyof T]-?: T[key];
  };

  const p4: PartialPerson = {
    name: "章3",
    age: 23,
  };

  // Required 将所有可选变成非可选操作符号
  type RequiredPerson = Required<PartialPerson>;
  const p5: RequiredPerson = {
    name: "p5 name",
    age: 23,
    gender: "female",
  };
}

namespace ReadonlyAndPickSpace {
  interface PersonInter {
    name: string;
    age: number;
  }

  type ReadonlyType = Readonly<PersonInter>;
  // Readonly 手动实现
  type MyReadonly<T> = {
    readonly [key in keyof T]: T[key];
  };

  const person1: ReadonlyType = {
    name: "jake",
    age: 23,
  };

  // person1.name = "jake2" // 因为使用了Readonly限制了person1， 所以person1的所有属性的值只可读，不可写

  interface Animal {
    name: string;
    age: number;
    run: () => void;
  }

  type AnimalSub = Pick<Animal, "name" | "age">;
  const animal: AnimalSub = {
    name: "jakeQuc",
    age: 23,
  };

  type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
  };

  type PickPerson = Pick<PersonInter, "name">;

  const p: PickPerson = {
    name: "person name",
  };
}
