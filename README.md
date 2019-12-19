# TypeScript手册指南

## 当前版本

`TypeScript 3.7`

## 更新记录

[点此进入](./UPDATE.md)

## 书写规范

1. 尽可能用教程中的实例（增加阅读英文教程的代入感）
2. 只记录复习用的知识点（主要用来做知识的复习更新）

## 思考原则

1. 尽可能多地思考实际应用场景
2. 思考有别于其他写法的优缺点

## 基础类型

1. 赋值方式增加了类型说明(可选)
2. 丰富了基础类型及其相应类型说明
3. 一些过渡的兼容方式

[变量初始化](./BasicTypes/demo1.ts)

[数组的初始化](./BasicTypes/demo2.ts)

[元组](./BasicTypes/demo3.ts)

[any/类型断言](./BasicTypes/demo4.ts)

[void/never](./BasicTypes/demo5.ts)

## 变量声明

> 与ES6一致

## 接口

1. 新增类型标准定义规则

> 只定义标准，不考虑实现

[变量/参数](./Interfaces/demo1.ts)

[函数/混合](./Interfaces/demo2.ts)

[类](./Interfaces/demo3.ts)

[继承](./Interfaces/demo4.ts)

## 类

1. 多态的概念
2. 抽象类的作用

> 与ES6基本一致

[修饰符/存储器](./Classes/demo1.ts)

[静态属性/抽象类](./Classes/demo2.ts)

[小技巧](./Classes/demo3.ts)

## 函数

[推断类型/参数](./Functions/demo1.ts)

[重载](./Functions/demo2.ts)

## 泛型

> 让写的代码更加的通用

[函数/类](./Generics/demo1.ts)
注意哦～ 木有接口，why？

[泛型约束](./Generics/demo2.ts)

## 疑难杂症

* declare 关键字
* 在类型声明前增加!

```typescript
class Point {
  x: number | undefined;
  y!: number;
}
```

* {new(): T; }这里用这种写法来校验是否是可实例的类，对应的 new 关键字
对象字面量来定义类型声明，其他特殊的写法：

```typescript
{<T>(arg: T): T}
{new(): T; }
```
