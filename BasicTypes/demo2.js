// TODO 初级「基础类型」
// let arr1:number []= [1,2,3]
// let arr2:(number|string)[] = [1, "str", '123']
// let arr3:Array<number|null> = [null, 123]
// let arr4:any[] = [123, 'string', false]
// TODO 中级「自定义类型」
// 类自定义类型[初级]
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var item = { name: 'hello', age: 12 }; // 实际结构符合也可以作为符合类型校验(包含)
var arr6 = [item];
console.log(arr6);
// 类自定义类型[高级]
// class Person {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Man extends Person {
//   constructor(name: string) {
//     super(name)
//   }
// }
// const item = new Man("小白")
// let arr6: Array<Person> = [item]
// 不同版本内置了特殊的接口
// let arrReadonly: ReadonlyArray<number> = [1]
// let prettySure: Object = 4;
// 接口自定义类型[初级]
// interface Item {
//   name: string
//   age: number
// }
// let arr5: Array<Item> = [{name: 'dd', age: 18, date: 'hehe'} as Item]
// 接口自定义类型[高级]
// interface Item {
//   name: string
//   age: number
// }
// interface SItem extends Item {
//   tall: number
// }
// demo1
// let item: Item = {name: 'dd', age: 18}
// let arr5: Array<Item> = [item]
// demo2
// let item: SItem = {name: 'dd', age: 18, tall: 8}
// let arr5: Array<Item> = [item]
// demo3
// let item: object = {name: 'dd', age: 18, tall: 8}
// let arr5: Array<Item> = [item]
// demo4
// let item = {name: 'dd', age: 18, tall: 8}
// let arr5: Array<Item> = [item]
// TODO 高级「泛型」
// interface Item {
//   name: string
//   age: number
// }
// class myArr<T> {
//   arr: Array<T>
//   constructor() {
//     this.arr = []
//   }
//   addItem(item: T) {
//     this.arr.push(item)
//   }
// }
// let arr7 = new myArr<Item>()
