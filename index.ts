let 이름: string = '김하빈';
let 나이: number = 27;
let 고향: string = '인천';
let 노래: { 곡: string; 가수: string } = { 곡: '잘됐으면좋겠다', 가수: '홍대광' };
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

let 학교: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
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

function canMarry(salary: number, house: boolean, charm: string): string | void {
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
