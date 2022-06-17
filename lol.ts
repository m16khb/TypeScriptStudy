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
console.log(garen);
