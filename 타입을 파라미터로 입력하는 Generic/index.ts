// function 함수<T>(x: T[]): T {
//   return x[0];
// }

// let a = 함수<number>([4, 2]);
// console.log(a);

// MyType에 무슨 타입 들어올지 모르니 에러
// function 함수<MyType>(x: MyType) {
//   return x - 1
// }

// let a = 함수<number>(100)

// function 함수<MyType extends number>(x: MyType) {
//   return x - 1;
// }

// let a = 함수<number>(100);

interface lengthCheck {
  length: number;
}
function 함수<MyType extends lengthCheck>(x: MyType) {
  return x.length;
}

let a = 함수<string>('hello'); //가능
// let b = 함수<number>(1234); //에러남
console.log(a);

function test<T extends string | string[]>(param: T) {
  console.log(param.length);
}
test<string>('hello');
test<string[]>(['kim', 'park']);

interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function test2<T>(x: string): T {
  return JSON.parse(x);
}

console.log(test2<Animal>(data));

class Person<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let temp = new Person<string>('어쩌구');
console.log(temp.name); //any 타입이 되었넹
