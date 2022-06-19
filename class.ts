//static붙은 속성은 상속이 안됨
class Game {
  static x = 10;
  protected y = 20;
}

class LoL extends Game {
  z = 30;
}
let 게임 = new Game();
let 롤 = new LoL();
console.log(Game.x);
console.log(게임);
console.log(롤);

class Student {
  static skill = 'js';
  intro = Student.skill + '전문가입니다.';
}

let 영희 = new Student();
console.log(영희.intro);

Student.skill = 'ts';
let 영희2 = new Student();
console.log(영희2.intro);
