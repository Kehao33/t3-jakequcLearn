// 函数定义
function hello(name: string): void {
  console.log("hello function declaration declaration");
}

// type 用来定义一个 类型 或者是 类型别名
// 如果使用type来定义类型 => 表示分割符（和箭头的函数相差不多）
type GetUserNameType = (
  firstName: string,
  lastName: string
) => {
  name: string;
};

// 函数定义
const getUserName: GetUserNameType = (
  firstName: string,
  lastName: string
): { name: string } => {
  return { name: firstName + lastName };
};

// 可选参数, 可选参数可以不用传递过来
function print(name: string, age: number, home?: string) {
  console.log("name is: ", name, "age is: ", age, "home may is: ", home);
}

print("jakequc", 23);

// 默认参数，如果没有传递过来就是用默认参数，如果传递过来了就使用传递过来的值
function ajax(url: string, method: string = "GET") {
  console.log("url is: ", url, "method is: ", method);
}
ajax("/url", "POST");
ajax("/user");

// 剩余参数
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

// 函数重载 方法名一样，先声明（重载声明），重载定义必须和函数实现放到一起（挨着一起）
/**
 * 函数重载： **函数项名称相同 **但输入输出类型或个数不同的子程序，
 * 它可以简单地称为一个单独功能可以执行多项任务的能
 */
const obj: any = {};
function setAttr(val: string): void;
function setAttr(val: number): void;
function setAttr(val: boolean): void;

function setAttr(val: string | number | boolean): void {
  switch (typeof val) {
    case "string":
      obj.name = val;
    case "number":
      obj.age = val;
    case "boolean":
      obj.isStudent = val;
  }
}

setAttr("jakequc");
setAttr(23);
setAttr(true);

function addResult(num1: number, num2: number): void;
function addResult(num1: string, num2: string): void;
function addResult(num1: any, num2: any): void {
  console.log(String(num1) + String(num2));
}

// Ts 里的箭头函数和js里是一样的哦

type DelayType = (ms: number) => void;
const delay = (ms: number) => {
  setTimeout(() => console.log("wait sec: ", ms), ms);
};
