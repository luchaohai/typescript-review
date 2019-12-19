// 针对函数返回值的两种特殊情况

// 函数无返回值 void

// function empty(): void {

// }

// 函数不应该走这条路 never

// demo1 抛出错误
// function empty(): never {
//   throw new Error('不应该呀');
// }

// demo2 返回错误
// function error(message: string): never {
//   throw new Error(message);
// }

// function empty(): never {
//   return error('不应该呀');
// }

// demo3 死循环
// function infiniteLoop(): never {
//   while (true) {
//   }
// }