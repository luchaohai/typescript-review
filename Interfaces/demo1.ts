// 变量
// interface Point {
//   x:string
//   y?:number // 可选
//   readonly z:boolean // 只读
//   [other: string]:any // 可索引
// }
// let a:Point = {
//   x: 'jeje',
//   z: false
// }

// class A {
//   name:number = 1
// }

// class B extends A {
//   name2:number = 3
// }


// // number索引必须是string索引的子集
// interface Point {
//   [x: number]:B
//   [x: string]:A
// }
// let a:Point = {
//   [1]: 3,
//   'e': 'fdsf'
// }

// 参数
// interface LabelledValue {
//   label: string;
// }
// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);