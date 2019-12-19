// 方法
// interface Point {
//   (a:string, b:number):string
// }
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// 案例分析
// let counter:Counter = {
//   function (start: number) { };
// }
