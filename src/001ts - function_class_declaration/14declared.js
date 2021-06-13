"use strict";
/**
 * 类型声明：
 * 声明文件可以让我们不需要将JS重构为TS，只需要加上声明文件就可以在系统中使用
 * 类型声明在编译的时候不会删除，不会影响到真正的代码
 *
 * 声明文件的写法：
 * declare 类型声明关键字（class let function ）: type
 * 命名空间可以嵌套
 *
 *
 * 类型声明文件
 * 可以把类型声明放到一个单独的文件声明文件中
 * 可以在类型声明文件中使用类型声明
 * 文件命名规范为 *.d.ts
 * 观看类型声明文件有助于了解库的使用方式
 *
 * 第三方声明文件
 * @types是约定的前缀，所有第三方声明的类型库都会带有这样的前缀
 */
var DeclareSpace;
(function (DeclareSpace) {
    $("#root").click();
    const seasons = [
        Seasons.Spring,
        Seasons.Summer,
        Seasons.Autumn,
        Seasons.Winter,
    ];
})(DeclareSpace || (DeclareSpace = {}));
