/**
 * 1.  要求 实现数据库的crud： 支持MySql，mongodb
 * 2. 实现同意的规范，以及代码的重用性
 *
 * 接口： 在面向对象的编程中， 接口是一种规范的定义，他规范了行为和动作
 * 范型： 范型在调用的时候才会决定类型是什么，范型是为了解决 类 方法的复用性
 */

// 定义范型接口
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}


// 定义一个操作mysql数据库的类
// 注意：要实现一个范型接口， 这个类也应该是一个范型类
class MysqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    // tslint:disable-next-line:no-console
    console.log("info: ",info)
   return true;
  }
  update(info: T, id: number): boolean {
   return true;
  }
  delete(id: number): boolean {
   return true;
  }
  get(id: number): any[] {
   return [true];
  }
}

// 操作数据表，定义一个User类型和数据表做映射
// tslint:disable-next-line:max-classes-per-file
class User {
  username: string | undefined;
  password: string | undefined;
}

const u = new User();
u.username = "zhangsan";
u.password = "123456";

const oMysql = new MysqlDb<User>();
oMysql.add(u);



// *************************


// 定义一个操作mysql数据库的类
// 注意：要实现一个范型接口， 这个类也应该是一个范型类
// tslint:disable-next-line:max-classes-per-file
class MSMysqlDb<T> implements DBI<T> {
  constructor() {
    // 这里边实现数据库的链接
  }
  add(info: T): boolean {
    // tslint:disable-next-line:no-console
    console.log("info: ",info)
   return true;
  }
  update(info: T, id: number): boolean {
   return true;
  }
  delete(id: number): boolean {
   return true;
  }
  get(id: number): any[] {
   return [true];
  }
}

// 操作数据表，定义一个User类型和数据表做映射
// tslint:disable-next-line:max-classes-per-file
class UserTable {
  username: string | undefined;
  password: string | undefined;
}

const userInfo = new UserTable();
userInfo.username = "zhangsan";
userInfo.password = "123456";

const msMysql = new MSMysqlDb<UserTable>();
msMysql.add(u);

