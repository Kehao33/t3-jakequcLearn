"use strict";
/**
 * 抽象类： abstract class
 * 抽象类是一种抽象的概念，无法被实例话，只能被继承
 * 无法创建抽象类的实例
 * 抽象方法不能在抽象类中实现，只能在抽象类的具体子类中实现，而且必须实现
 *
 * 抽象类里边可以有非抽象方法和抽象方法，抽象类可以被抽象类继承和非抽象类继承
 *
 * 访问控制修饰符： private , protected, public
 * readonly : 只读属性
 * static => 静态属性
 * abstract =》 抽象类，抽象方法ƒ
 */
class Animal {
    print() {
        console.log("抽象类里边可以有非抽象方法和抽象方法，抽象类可以被抽象类继承和非抽象类继承");
    }
}
class Cat extends Animal {
    getName() {
        return this.name;
    }
}
const cat = new Cat();
cat.name = "cat Name";
console.log(cat.getName());
