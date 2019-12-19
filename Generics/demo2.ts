// 在泛型约束中使用类型参数
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a");

// 在泛型里使用类类型
// class BeeKeeper {
//     hasMask: boolean | undefined;
// }
// class ZooKeeper {
//     nametag: string | undefined;
// }
// class Animal {
//     numLegs: number | undefined;
// }
// class Bee extends Animal {
//     keeper: BeeKeeper = new BeeKeeper();
// }
// class Lion extends Animal {
//     keeper: ZooKeeper = new ZooKeeper();
// }
// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }
// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!