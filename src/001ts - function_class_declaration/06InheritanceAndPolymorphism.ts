/**
 * inheritance & polymorphism => 继承和多态
 *
 * =》 ts中，接口可以继承接口，所以扩展类型定义的时候可以使用继承进行类型定义扩展
 *
 * 面向对象的三大特性： 封装，继承，多态
 *
 * 封装： 封装的目的是为只鞥在内部进行私有化处理，不是决绝访问，而是限制访问
 *
 * 继承（Inheritance）子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 多态（Polymorphism）由继承二产生了相关的不同的类，对于同一个方法可以由不同的行为
 *
 * 多态是同意操作作用域不同的对象上面，可以产生不同的效果
 * 多态和虫灾的最大区别在于参数上，前者参数必须一直，后者可以重载扩展
 *
 * 实现多态的步骤
 * 1. 定义基类，基类里边定义方法
 * 2. 子类实现基类，并重写基类的方法
 * 3. 不同的子类调用继承的基类中被重写的方法，即看看到多态的效果
 *
 *  约束构造函数，使用new 来约束
 *
 */

/**
 * es5的写法， 对类Person类进行封装，限制对height的初始化还有访问，但不是拒绝！！
 * 可以在js中去运行 👀
  function Person(attr) {
    this.name = name;
    this.weight = attr.weight;
    var _height = 0;
    this.setHeight = function(height){
      if(height <= 0){
        console.log("正常人的升高不应该小于0")
      }else {
        _height = height;
      }
    }
    this.getHeight = function(height){
      return _height;
    }
  }
 */

namespace typeSpace {
  interface NumberObject {
    [propName: string]: number;
  }

  const numberObj: NumberObject = {
    x: 1,
    y: 2,
  };

  console.log("numberObj: ", numberObj);
}

namespace interfaceAndReadonly {
  // 当使用了readonly声明了一个属性，并赋值之后就不可在更改了
  interface Circle {
    readonly PI: number;
    radius: number;
  }

  const circle: Circle = {
    PI: 3.1415926,
    radius: 10,
  };
  console.log("circle: ", circle);
}

namespace InterfaceInheritanceSpace {
  interface Speakable {
    sing(): void;
  }

  interface SpeakChinese extends Speakable {
    speakChinese(): void;
  }

  class Person implements SpeakChinese {
    sing() {
      console.log("can sing...");
    }

    speakChinese() {
      console.log("can speak chinese");
    }
  }

  const person = new Person();
  person.sing();
  person.speakChinese();
}

namespace encapsulationSpace {
  interface PersonInterface {
    name: string;
    weight: number;
  }

  class Person {
    public name: string;
    public weight: number;
    private _height: number; // 对属性的服装，限制类外可以直接访问，但是提供了外部修改和访问的接口

    constructor(attr: PersonInterface) {
      this.name = attr.name;
      this.weight = attr.weight;
    }
    // 对外提供修改封装属性的接口
    setHeight(height: number): void {
      this._height = height;
    }
    // 对外提供访问封装属性的接口
    getHeight(): number {
      return this._height;
    }

    say(): void {
      console.log("my name is; ", this.name);
    }
  }

  const person = new Person({ name: "jakeQuc", weight: 100 });
  person.setHeight(23);
  console.log(person.getHeight());
}

// 实现 多态 => 可以使用接口或者是抽象方法来实现
namespace polymorphismSpace {
  // 使用interface定义Person的属性类型
  interface PersonAttr {
    name: string;
    height: number;
    weight: number;
  }

  // 在继承Person属性类型的同时追加Student属性类型
  interface StudentOrTeacherAttr extends PersonAttr {
    no: number;
  }

  // 定义抽象类
  abstract class Person {
    public name: string;
    public weight: number;
    public height: number;

    constructor(attr: PersonAttr) {
      this.name = attr.name;
      this.height = attr.height;
      this.weight = attr.weight;
    }

    // 定义抽象方法，具体的实现由继承的子类来实现
    abstract say(): void;
  }

  class Student extends Person {
    public no: number;
    constructor(attr: StudentOrTeacherAttr) {
      super(attr);
      this.no = attr.no;
    }

    public say() {
      console.log(this.name, " number is : ", this.no);
    }
  }

  class Teacher extends Person {
    public no: number;
    constructor(attr: StudentOrTeacherAttr) {
      super(attr);
      this.no = attr.no;
    }

    public say() {
      console.log(this.name, " number is: ", this.no);
    }
  }

  const stu = new Student({
    name: "student",
    weight: 100,
    height: 180,
    no: 20200601,
  });
  stu.say();

  const tea = new Teacher({
    name: "teacher",
    weight: 130,
    height: 180,
    no: 20180601,
  });
  tea.say();
}

namespace InterfaceFunction {
  // 接口还可以用来约束函数
  interface Discount {
    (price: number): number;
  }

  const cost: Discount = (price: number): number => {
    return 2 + 3;
  };
}

// 可索引接口， 是用来对数组和对象进行约束

namespace indexSpace {
  interface DefinedArray {
    [index: number]: string;
  }

  const arr: DefinedArray = ["1", "2", "3"];

  interface DefinedObject {
    [index: string]: string;
  }

  const obj: DefinedObject = { propertyName: "value" };
}

// 类接口，可以使用接口来装饰类， 学习TS核心，学习两个重要的知识点： 接口 + 范型

namespace interfaceSpace {
  interface Speakable {
    name: string;
    speak(words: string): void;
  }

  class Dog implements Speakable {
    name: string;
    speak(words: string): void {
      throw new Error("Method not implemented.");
    }
  }

  class Animal {
    constructor(public name: string) {}
  }

  // 约束构造函数，使用new 来约束
  interface WithNameClass {
    new (name: string): Animal;
  }

  function createAnimal(className: WithNameClass, name: string) {
    return new className(name);
  }

  const a = createAnimal(Animal, "testName");
}
