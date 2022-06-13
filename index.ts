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
