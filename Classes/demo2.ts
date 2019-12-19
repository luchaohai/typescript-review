// 静态属性
// 关键字：static
// class Grid {
//   static origin = {x: 0, y: 0};
//   calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//       let xDist = (point.x - Grid.origin.x);
//       let yDist = (point.y - Grid.origin.y);
//       return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor (public scale: number) { }
// }

// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// 抽象类
// 关键字：abstract
// 定义标准
// 1.不能直接被实例化
// 2.可以包含成员的具体实现细节
// 3.抽象方法必须在抽象类里
// abstract class Department {
//   constructor(public name: string) {
//   }
//   printName(): void {
//       console.log('Department name: ' + this.name);
//   }
//   abstract printMeeting(): void; // 必须在派生类中实现
// }
// class AccountingDepartment extends Department {
//   constructor() {
//       super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//   }
//   printMeeting(): void {
//       console.log('The Accounting Department meets each Monday at 10am.');
//   }
//   generateReports(): void {
//       console.log('Generating accounting reports...');
//   }
// }

// 案例分析
// let department: Department;
// department = new Department();
// department = new AccountingDepartment();
// department.generateReports();