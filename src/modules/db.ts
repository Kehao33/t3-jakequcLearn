// 定义范型接口
export interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

// 定义一个操作mysql数据库的类
// 注意：要实现一个范型接口， 这个类也应该是一个范型类
export class MysqlDb<T> implements DBI<T> {
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

export const getData = () => console.log("getDate")