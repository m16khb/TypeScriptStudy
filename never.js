function 함수(parameter) {
    if (typeof parameter === 'string') {
        console.log(parameter);
    }
    else {
        console.log(parameter);
    }
}
class User {
    name;
    familyName = 'kim';
    constructor(a) {
        this.name = this.familyName + a;
    }
}
let 유저1 = new User('민수');
console.log(유저1);
