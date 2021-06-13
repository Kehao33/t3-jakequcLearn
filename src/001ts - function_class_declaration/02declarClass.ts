// 命名空间里可以保证同一个文件重复声明多个类

/**
 * readonly 修饰符保证了函数的成员只能在构造函数中赋值
 */
// tslint:disable-next-line:no-namespace
namespace a {
  // 存取器 getter, setter,
  class Person {
    pName: string;
    age: number;

    constructor(pName: string, age: number) {
      this.age = age;
      this.pName = pName;
    }

    get name() {
      return this.pName;
    }

    set name(newName: string) {
      this.pName = newName.toUpperCase();
    }
  }

  const p = new Person("jake", 23);
  console.log(p.name);
  console.log((p.name = "new name"));
}

/**
 *   ts中类的继承
 *  子类继承父类后，子类的的实例傻姑娘就拥有了父类中的属性和方法
 */
namespace b {
  // tslint:disable-next-line:max-classes-per-file
  class Person {
    constructor(
      public name: string,
      protected age: number,
      private amount?: number
    ) {
      this.name = name;
      this.age = age;
      this.amount = amount;
    }

    getName() {
      return this.name;
    }

    toString() {
      console.log("name is: ", this.name, "age: ", this.age);
    }
  }

  class Student extends Person {
    constructor(
      readonly name: string,
      readonly age: number,
      readonly stuNo: number
    ) {
      // 如果是继承了其他的基类，那就要使用super将对应的参数传递给基类（父类）
      super(name, age);
      this.stuNo = stuNo;
    }

    printStudentNo() {
      console.log("this student No.", this.stuNo);
    }
  }

  const stu = new Student("jakequc", 23, 2017);
  stu.toString();
  stu.printStudentNo();
}

/**类成员的访问修饰符： public protected private
 * public: 自己，自己的子类和其他类都能够访问 （比如公共的环境，大家都是可以访问的）
 * protected： 受保护的， 自己和自己的孩子中可以访问（比如家产，你和你的父亲都是可以访问的）
 * private：私有的，只能自己访问，自己的子类不能访问，其他的类更不能访问 （比如你父亲的私房钱只能他自己访问到，自己的孩子是不能够访问到的）
 *
 *
 * 静态属性和静态方法
 * 静态方法或者是属性 使用 static来声明， 静态是属于类的属性，不需要实例话就可以被调用
 */
