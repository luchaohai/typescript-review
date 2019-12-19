// 修饰符
// public / protected / private

// 存储器
// const fullNameMaxLength = 10;

// class Employee {
//     // class 里的属性必须初始化
//     private _fullName: string = '';

//     // ES5及以上才能用
//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (newName && newName.length > fullNameMaxLength) {
//             throw new Error("fullName has a max length of " + fullNameMaxLength);
//         }
        
//         this._fullName = newName;
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }