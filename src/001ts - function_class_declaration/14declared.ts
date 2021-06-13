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

namespace DeclareSpace {
  declare const $: (selector: string) => {
    click(): void;
    width(length: number): void;
  };

  $("#root").click();

  declare enum Seasons {
    Spring,
    Summer,
    Autumn,
    Winter,
  }
  declare class Animal {
    name: string;
  }
  declare function getName(): string;

  declare class Person {}
  const seasons: Seasons[] = [
    Seasons.Spring,
    Seasons.Summer,
    Seasons.Autumn,
    Seasons.Winter,
  ];
}

// 声明的命名空间里不需要加类型声明了
declare namespace JQuery {
  function ajax(url: string, config: any): void;
  let name: string;
  namespace fn {
    function extend(object: any): void;
  }
}

// 字面量也是类型
