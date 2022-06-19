function 함수(parameter: string) {
  if (typeof parameter === 'string') {
    console.log(parameter);
  } else {
    console.log(parameter);
  }
}

class User {
  name: string;
  private familyName: string = 'kim';
  constructor(a: string) {
    this.name = this.familyName + a;
  }
}
let 유저1 = new User('민수');
console.log(유저1);
