// 推断类型
// 注意哦～ 和类型推论还不一样
// let myAdd: (baseValue: number, increment: number) => number = function(x, y) { return x + y; };

// 可选参数，默认参数，剩余参数
// function buildName(firstName = "Jonney", lastName?: string, age = 20, ...restOfName: string []) {
//   if (lastName)
//       return firstName + " " + lastName;
//   else
//       return firstName;
// }

// 案例分析
// 可选实际是如何实现的？