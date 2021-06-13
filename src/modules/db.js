"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.MysqlDb = void 0;
// 定义一个操作mysql数据库的类
// 注意：要实现一个范型接口， 这个类也应该是一个范型类
class MysqlDb {
    add(info) {
        // tslint:disable-next-line:no-console
        console.log("info: ", info);
        return true;
    }
    update(info, id) {
        return true;
    }
    delete(id) {
        return true;
    }
    get(id) {
        return [true];
    }
}
exports.MysqlDb = MysqlDb;
const getData = () => console.log("getDate");
exports.getData = getData;
