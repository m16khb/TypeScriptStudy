// function 함수<T>(x: T[]): T {
//   return x[0];
// }
function 함수(x) {
    return x.length;
}
let a = 함수('hello'); //가능
// let b = 함수<number>(1234); //에러남
console.log(a);
function test(param) {
    console.log(param.length);
}
test('hello');
test(['kim', 'park']);
let data = '{"name" : "dog", "age" : 1 }';
function test2(x) {
    return JSON.parse(x);
}
console.log(test2(data));
class Person {
    name;
    constructor(a) {
        this.name = a;
    }
}
let temp = new Person('어쩌구');
console.log(temp.name); //any 타입이 되었넹
