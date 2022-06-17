class Skill {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Champion {
    name;
    q;
    w;
    e;
    r;
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
    model;
    price;
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
}
let car = new Car('소나타', 3000);
console.log(car);
console.log(car.tax());
class Word {
    str = [];
    num = [];
    constructor(...args) {
        args.forEach((el) => {
            console.log(el);
            if (typeof el === 'string') {
                this.str.push(el);
            }
            else {
                this.num.push(el);
            }
        });
    }
}
let word = new Word('kim', 3, 5, 'park');
console.log(word);
let 네모 = { color: 'red', width: 100 };
let 학생 = { name: 'kim' };
let 선생 = { name: 'kim', age: 20 };
console.log(학생);
console.log(선생);
let 상품 = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone'],
};
let 장바구니 = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];
let 장바구니2 = [{ product: '청소기', price: 7000, card: false }];
let obj = {
    plus(x, y) {
        return x + y;
    },
    minus(x, y) {
        return x - y;
    },
};
console.log(obj.plus(1, 2));
