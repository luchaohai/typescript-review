// 方法
// interface Point {
//   (a:string, b:number):string
// }

// 变量声明函数
// let a:Point = function(c:string, d:number):string {
//   return "hello world"
// }
// let a = <Point>function(c:string, d:number):string {
//   return "hello world"
// }

// 函数式声明
// <Point>function a (c:string, d:number):string {
//   return "hello world"
// }

// 混合
// interface Counter {
//   interval: number;
//   (start: number): string;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) { return 'hello world'};
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;

// 案例分析
// let counter:Counter = {
//   function (start: number) { };
// }
