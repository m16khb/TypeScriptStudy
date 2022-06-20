let person = { student: true, age: 20 };
function destruct({ student, age }) {
    console.log(student, age);
}
destruct(person);
function max(...param) {
    let max = 0;
    param.forEach((el) => {
        el > max ? (max = el) : null;
    });
    return max;
}
console.log(max(1, 2, 3, 4, 5, 7, 8, 6));
function 함수({ user, comment, admin, }) {
    console.log(user, comment, admin);
}
함수({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함수2([a, b, c]) {
    console.log(a, b, c);
}
함수2([40, 'wine', false]);
