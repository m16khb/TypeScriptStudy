let 이름 = "김하빈";
let 나이 = 27;
let 고향 = "인천";
let 노래 = {
    곡: "잘됐으면좋겠다",
    가수: "홍대광",
};
let project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
let 회원 = 123;
회원 = "vip";
let 회원들 = [1, "2", 3];
let 오브젝트 = { a: "123" };
오브젝트.a = 123;
/*
let 이름2: any;
이름2 = 123;
이름2 = true;
*/
//unknown의 경우 any보다 타입에 대해 안전하다.
let 이름2;
이름2 = 123;
이름2 = {};
//let 변수1: string = 이름2;
//이름 - 1;
let 나이2 = 1;
나이2 = 나이2 + 1;
let user = "kim";
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function 함수(x) {
    if (typeof x === "number")
        return 2 * x;
    return 0;
}
console.log(함수(30));
function hello(name) {
    if (name) {
        console.log(`안녕하세요 ${name}`);
        return;
    }
    console.log("이름이 없습니다.");
}
hello("하빈");
hello();
//type narrowing
function 자릿수(x) {
    if (typeof x === "number") {
        console.log(x.toString().length);
    }
    else {
        console.log(x.length);
    }
}
//type assertion
//1. narrowing 할 때 쓴다.
//엥간하면 if문 typeof 쓰는 게 좋음 (버그 추적을 위해)
//보통 디버깅 할 때 씀
function myfunction(x) {
    let array = [];
    array[0] = x;
}
자릿수(12345);
자릿수("12345678");
function canMarry(salary, house, charm) {
    let total = 0;
    total += salary;
    house ? (total += 500) : null;
    charm === "상" ? (total += 100) : null;
    if (total >= 600) {
        return "결혼가능";
    }
}
console.log(canMarry(230, false, "하"));
console.log(canMarry(300, false, "상"));
console.log(canMarry(300, true, "하"));
let complex = ["1", 2, "3"];
function cleaning(array) {
    // map 사용
    // let numberArray = array.map((el) => {
    // 	if (typeof el === 'number') {
    // 		return el;
    // 	}
    // 	return Number(el);
    // });
    // console.log(numberArray);
    //foreach 사용
    let numberArray = [];
    array.forEach((el) => {
        if (typeof el === "number") {
            numberArray.push(el);
        }
        else {
            numberArray.push(Number(el));
        }
    });
    return numberArray;
}
console.log(cleaning(complex));
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
function lastLecture(teachLecture) {
    if (typeof teachLecture.subject === "string") {
        return teachLecture.subject;
    }
    else {
        return teachLecture.subject[teachLecture.subject.length - 1];
    }
}
console.log(lastLecture(민수쌤));
let 동물;
let 사람 = { name: "kim", age: 20 };
const spiderMan = {
    name: "피터 파커",
};
let position = { x: 10, y: 20 };
let xyz = { x: 10, y: 20, z: 30 };
let person;
//literal type
let lit;
lit = "kim";
lit = "lee";
lit = "park";
function rsp(hand) {
    return [];
}
console.log(rsp("바위"));
//as const
//1.이 object는 literal type지정을 해주세요
//2.이 object는 readonly에요
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
내함수(자료.name);
