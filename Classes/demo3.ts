// readonly 来增加参数属性
// class Octopus {
//   readonly numberOfLegs: number = 8;
//   constructor(readonly name: string) {
//   }
// }
// let t = new Octopus("hello world")
// console.log(t.name)

// 类定义会创建两个东西：类的实例类型「即创建新的类型」和一个构造函数
// 在允许使用接口的地方使用类
// class Point {
//   x: number | undefined;
//   y: number | undefined;
// }

// interface Point3d extends Point {
//   z: number;
// }

// let point3d: Point3d = {x: 1, y: 2, z: 3};
// let point2d: Point = {x: 1, y: 2};