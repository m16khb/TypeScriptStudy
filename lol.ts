class Skill {
  name: String;
  constructor(name: String) {
    this.name = name;
  }
}

class Champion {
  name: String;
  q: Skill;
  w: Skill;
  e: Skill;
  r: Skill;
}

let garen = new Champion();
garen.name = 'garen';
garen.q = new Skill('q');
garen.w = new Skill('w');
garen.e = new Skill('e');
garen.r = new Skill('r');

let darius = new Champion();
darius.name = 'darius';
darius.q = new Skill('q');
darius.w = new Skill('w');
darius.e = new Skill('e');
darius.r = new Skill('r');

console.log(garen);
console.log(darius);

//homework
class Car {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    return this.price / 10;
  }
}

let car = new Car('소나타', 3000);
console.log(car);
console.log(car.tax());

class Word {
  str: string[] = [];
  num: number[] = [];

  constructor(...args: (string | number)[]) {
    args.forEach((el: string | number) => {
      console.log(el);
      if (typeof el === 'string') {
        this.str.push(el);
      } else {
        this.num.push(el);
      }
    });
  }
}

let word = new Word('kim', 3, 5, 'park');
console.log(word);

interface Square {
  color: string;
  width: number;
}
let 네모: Square = { color: 'red', width: 100 };

//interface는 중복선언 가능
//중복선언시 합쳐진다.
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: 'kim' };
let 선생: Teacher = { name: 'kim', age: 20 };
console.log(학생);
console.log(선생);

type Animal = { name: string };
type Cat = { age: number } & Animal;

//homework
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: 'Samsung',
  serialNumber: 1360,
  model: ['TV', 'phone'],
};

interface Cart {
  product: string;
  price: number;
}
let 장바구니: Cart[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
];

interface NewCart extends Cart {
  card: boolean;
}
let 장바구니2: NewCart[] = [{ product: '청소기', price: 7000, card: false }];

// interface MathObj {
//   plus(x: number, y: number): number;
//   minus(x: number, y: number): number;
// }
interface MathObj {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}
let obj: MathObj = {
  plus(x: number, y: number): number {
    return x + y;
  },
  minus(x: number, y: number): number {
    return x - y;
  },
};

console.log(obj.plus(1, 2));
