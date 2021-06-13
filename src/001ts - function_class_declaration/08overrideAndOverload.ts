/**
 * override & overload
 * 重写是子类将父类的方法进行了重写操作
 * 重写并不是直接替换了父类的方法，只是使用当前类调用的方法的时候调用的是重写的方法，
 * 可以在子类中使用super来调用父类的函数
 *
 * overload：重载是对同一个函数定义了不同的类型， 即函数名相同，参数或者是返回值不同
 *
 * 静态方法是可以被子类继承的，继承后只需要 子类名.父类的staticFunction即可
 * 在子类中不能够使用super来调用父类的静态函数，因为静态函数或者说静态属性是挂在到当前类下边的
 * super关键字只能调用到父类prototype上的属性
 *
 */

// 重载
namespace overloadSpace {
  function funA(num: string): void;
  function funA(num: number): number;

  function funA(arg: any): void | number {
    switch (typeof arg) {
      case "number":
        return arg + 100;
      case "string":
        console.log(arg + "<<<");
    }
  }

  funA("jake");

  console.log("number: ", funA(10));
}

// 重写
namespace overrideSpace {
  // 重写 子类重新实现并覆盖父类中的方法
  class Animal {
    constructor() {}

    speak() {
      console.log("Animal: this is parent function speak");
    }
  }

  class Cat extends Animal {
    // 这是一个重写的行为
    speak() {
      console.log("重写行为: miao miao miao~");
    }
  }

  class Dog extends Animal {
    // 这是一个重写的行为
    speak() {
      super.speak();
      // super 其实是父类的原型，即当前是 Animal.prototype
      console.log("重写行为: wang wang wang~");
    }
  }

  const cat = new Cat();
  cat.speak();

  const dog = new Dog();
  dog.speak();
}

namespace StaticTestSpace {
  // 静态方法是可以被子类继承的，继承后只需要 子类名.父类的staticFunction即可
  class Parent {
    static print() {
      console.log("parent function");
    }
  }

  class Child extends Parent {
    println() {
      Parent.print();
    }
  }

  const child = new Child();
  child.println();
  Child.print();
}
