let person: { student: boolean; age: number } = { student: true, age: 20 };
type human = { student: boolean; age: number };
function destruct({ student, age }: human) {
  console.log(student, age);
}
destruct(person);

function max(...param: number[]): number {
  let max = 0;
  param.forEach((el) => {
    el > max ? (max = el) : null;
  });
  return max;
}
console.log(max(1, 2, 3, 4, 5, 7, 8, 6));

function 함수({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) {
  console.log(user, comment, admin);
}
함수({ user: 'kim', comment: [3, 5, 4], admin: false });

function 함수2([a, b, c]: (number | string | boolean)[]) {
  console.log(a, b, c);
}
함수2([40, 'wine', false]);
