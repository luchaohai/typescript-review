// 基础语法
// let x: number|string|boolean = 1; // 多类型声明
// number 支持的各种进制的字面量
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
// string 支持换行以及空格的模板字符串
// let age: number = 37;
// let sentence: string = `Hello, my name is Gene.
// I'll be ${ age + 1 } years old next month.`;
// enum 支持字符串以及数字的编号(从0开始)
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2]; // 也可以通过[]访问枚举key「在某些数据字典key与value需要相互翻译的时候非常好用」
console.log(colorName);
console.log(c);
console.log(Color);
// undefined 可以直接赋值
// let a: string|undefined
// console.log(a)
// null 需要单独定义
// let a: string|null
// console.log(a)
