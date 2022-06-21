let 이름: string = '김하빈';
let 나이: number = 27;
let 고향: string = '인천';
let 노래: { 곡: string; 가수: string } = {
  곡: '잘됐으면좋겠다',
  가수: '홍대광',
};
let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};
let 회원: number | string = 123;
회원 = 'vip';
let 회원들: (number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: '123' };
오브젝트.a = 123;

/*
let 이름2: any;
이름2 = 123;
이름2 = true;
*/

//unknown의 경우 any보다 타입에 대해 안전하다.
let 이름2: unknown;
이름2 = 123;
이름2 = {};
//let 변수1: string = 이름2;
//이름 - 1;
let 나이2: string | number = 1;
나이2 = 나이2 + 1;

let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

function 함수(x?: number | string): number {
  if (typeof x === 'number') return 2 * x;
  return 0;
}
console.log(함수(30));

function hello(name?: string): void {
  if (name) {
    console.log(`안녕하세요 ${name}`);
    return;
  }
  console.log('이름이 없습니다.');
}

hello('하빈');
hello();

//type narrowing
function 자릿수(x: number | string): void {
  if (typeof x === 'number') {
    console.log(x.toString().length);
  } else {
    console.log(x.length);
  }
}

//type assertion
//1. narrowing 할 때 쓴다.
//엥간하면 if문 typeof 쓰는 게 좋음 (버그 추적을 위해)
//보통 디버깅 할 때 씀
function myfunction(x: number | string): void {
  let array: number[] = [];
  array[0] = x as number;
}

자릿수(12345);
자릿수('12345678');

function canMarry(
  salary: number,
  house: boolean,
  charm: string
): string | void {
  let total: number = 0;
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

let complex = ['1', 2, '3'];
function cleaning(array: (number | string)[]): number[] {
  // map 사용
  // let numberArray = array.map((el) => {
  // 	if (typeof el === 'number') {
  // 		return el;
  // 	}
  // 	return Number(el);
  // });
  // console.log(numberArray);

  //foreach 사용
  let numberArray: number[] = [];
  array.forEach((el) => {
    if (typeof el === 'number') {
      numberArray.push(el);
    } else {
      numberArray.push(Number(el));
    }
  });
  return numberArray;
}
console.log(cleaning(complex));

let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };

function lastLecture(teachLecture: { subject: string | string[] }): string {
  if (typeof teachLecture.subject === 'string') {
    return teachLecture.subject;
  } else {
    return teachLecture.subject[teachLecture.subject.length - 1];
  }
}
console.log(lastLecture(민수쌤));

//type alias(파스칼케이스 사용)
type Animal = string | number | undefined;
type Identity = { name: string; age: number };
let 동물: Animal;
let 사람: Identity = { name: 'kim', age: 20 };

//readonly 속성
type Avengers = { readonly name: string };
const spiderMan: Avengers = {
  name: '피터 파커',
};

//type union
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
//{x:number , y:number}
type PositionXY = PositionX & PositionY;
let position: PositionXY = { x: 10, y: 20 };
//타입은 재정의 불가능

type PositionZ = { x: number; z: number };
type PositionXYZ = PositionXY & PositionZ;
let xyz: PositionXYZ = { x: 10, y: 20, z: 30 };

// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
type Mine = { color?: string; size: number; readonly position: number[] };
type Inspection = { name: string; phone: number; email?: string };
type Adult = { adult: boolean };
type InspectionAdult = Inspection & Adult;
let person: InspectionAdult;

//literal type
let lit: 'kim' | 'lee' | 'park';
lit = 'kim';
lit = 'lee';
lit = 'park';

function rsp(hand: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return [];
}

console.log(rsp('바위'));

//as const
//1.이 object는 literal type지정을 해주세요
//2.이 object는 readonly에요
var 자료 = {
  name: 'kim',
} as const;

function 내함수(a: 'kim') {}

내함수(자료.name);

import { abc } from './a';
console.log(abc);
import { cde } from './a';
let foo: cde = '123';
console.log(typeof foo);

import { Car } from './vechile';
let 차차차: Car = { wheel: 4, model: 'bmw' };
console.log(차차차);
import { Bike } from './vechile';
let 바이크: Bike = { wheel: 2, model: 'honda' };
console.log(바이크);
