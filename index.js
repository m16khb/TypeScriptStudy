var 이름 = '김하빈';
var 나이 = 27;
var 고향 = '인천';
var 노래 = { 곡: '잘됐으면좋겠다', 가수: '홍대광' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var 회원 = 123;
회원 = 'vip';
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: '123' };
오브젝트.a = 123;
/*
let 이름2: any;
이름2 = 123;
이름2 = true;
*/
//unknown의 경우 any보다 타입에 대해 안전하다.
var 이름2;
이름2 = 123;
이름2 = {};
//let 변수1: string = 이름2;
//이름 - 1;
var 나이2 = 1;
나이2 = 나이2 + 1;
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수(x) {
    if (typeof x === 'number')
        return 2 * x;
    return 0;
}
console.log(함수(30));
function hello(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
        return;
    }
    console.log('이름이 없습니다.');
}
hello('하빈');
hello();
function 자릿수(x) {
    if (typeof x === 'number') {
        console.log(x.toString().length);
    }
    else {
        console.log(x.length);
    }
}
자릿수(12345);
자릿수('12345678');
function canMarry(salary, house, charm) {
    var total = 0;
    total += salary;
    house ? (total += 500) : null;
    charm === '상' ? (total += 100) : null;
    if (total >= 600) {
        return '결혼가능';
    }
}
console.log(canMarry(230, false, '하'));
console.log(canMarry(300, false, '상'));
console.log(canMarry(300, true, '하'));
