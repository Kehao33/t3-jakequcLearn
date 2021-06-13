/**
 * 装饰器： 装饰器是一种特殊的类型声明，它能够被附加到到类/方法/属性或者参数上，可以修改类的行为
 * 通俗的说装饰器就是一个方法可以注入到类/方法/属性参数来扩展类/属性/方法/参数的功能。
 * 常见的装饰器有： 类装饰器/属性装饰器/方法装饰器/参数装饰器
 *
 * 装饰器的写法： 普通装饰器（无法传参）， 装饰器工厂（可传参）
 *
 * 装饰器： ES7的标准之一
 *
 */

// 1。类装饰器就是在类声明之前被声明（接着是类的声明），类装饰器应用于类的构造函数，可以用来监视，修改或者替换类的定义。传入一个参数

console.log("===============类装饰器： START =========================");
// ===================类装饰器: 装饰器里的参数params就是当前类==========
function logClass1(currentClass: any) {
  console.log(currentClass, "<<<<logClass1"); //currentClass参数就是当前类
  currentClass.prototype.apiUri = "给类扩展属性";
  currentClass.prototype.run = () => console.log("running......");
}

/**
* 装饰器类的介绍：类装饰器在类加在的时候就执行了，
* 注意不是实例化类的时候才执行，一般类装饰器适合给当前的类扩展属性或者方法的时候使用
 */

// @装饰器的名字，相当于调用这个装饰器
@logClass1
class HttpClient {
  constructor() {
    console.log("装饰器类在");
  }

  getData() {
    console.log("called getData");
  }
}

const hc: any = new HttpClient();
hc.getData();
hc.run(); // 调用装饰器 给类扩展的方法
console.log("===============类装饰器： END =========================");

// ===============装饰器工厂（可传参数）=================
function logDecorator(params: string) {
  return function (currentClass: any) {
    // 必须return 一个函数，此函数的currentClass就是被装饰器的类
    console.log(currentClass);
    console.log(params);
  };
}

@logDecorator("jakequc")
class HttpClient2 {
  constructor() {}

  getData() {}
}

// ===============类装饰器： 重载构造函数=================
/**
 * 1. 类装饰器表达式会在运行时当作函数被低哦用，类的构造函数作为唯一的参数
 *
 * 如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
 *
 */

function logClass(target: any) {
  // target就是当前类，或者是正在运行的实例
  console.log(target);
  // 重载构造函数
  return class extends target {
    apiUrl: any = "重载构造函数后修改值";

    getData() {
      console.log("重载后的函数");
    }
  };
}

class HttpClient3 {
  public apiUrl: string | undefined;

  constructor() {
    this.apiUrl = "this.apiUrl is constructor";
  }

  getData() {
    console.log(this.apiUrl);
  }
}

const http = new HttpClient3();

// =================属性装饰器========================
/**
 * 属性装饰器： 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
 * 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 2. 成员的名字
 *
 * */

// 类装饰器
function logClass3(params: string) {
  return function (target: any) {
    console.log(target, "target");
    console.log(params, "params");
  };
}

// 属性装饰器
function logProperty(params: any) {
  // attr是成员的名字，target对于静态成员来说是类的构造函数，对于实例成员来说是类的对象
  return function (target: any, attr: any) {
    console.log("target>>>", target, "attr: ", attr);
  };
}

@logClass3("xxxx")
class HttpClient4 {
  @logProperty("http://property.com")
  public url: any | undefined;

  constructor() {}

  getData() {}
}
