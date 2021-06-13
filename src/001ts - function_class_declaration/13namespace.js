"use strict";
/**
 * 模块 和 命名空间
 * 11.11模块
 *  模块是TS中外部模块的简称，侧重于代码和复用
 * 模块在自身的作用域里边执行，而不是在全剧作用域里执行
 * 一个模块里的变量/函数/类在外部在你未导出前对外部是不可见的
 * 一个模块里想使用另外一个模块，需要另外一个模块进行导出，一个模块进行导入才可以
 *
 * 命名空间：
 * 在代码量比较大的情况，为了避免命名空间的冲突，可以将相似的函数/类/接口放置到命名空间内
 * 命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象，命名空间内通过 export向外导出
 * 命名空间是内部模块，主要用于组织代码，避免冲突命名
 *
 */
var zoo;
(function (zoo) {
    class Dog {
    }
    zoo.Dog = Dog;
})(zoo || (zoo = {}));
var HomeSpace;
(function (HomeSpace) {
    class Dog {
    }
    HomeSpace.Dog = Dog;
})(HomeSpace || (HomeSpace = {}));
// 命名空间外使用命名空间的方法或者是属性，需要在命名空间内导出才行
const dog = new HomeSpace.Dog();
