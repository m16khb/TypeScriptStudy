var Skill = /** @class */ (function () {
    function Skill(name) {
        this.name = name;
    }
    return Skill;
}());
var Champion = /** @class */ (function () {
    function Champion() {
    }
    return Champion;
}());
var garen = new Champion();
garen.name = 'garen';
garen.q = new Skill('q');
garen.w = new Skill('w');
garen.e = new Skill('e');
garen.r = new Skill('r');
console.log(garen);
