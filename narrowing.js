//in 키워드로 object narrowing 가능
//instanceof 키워드로 object narrowing 가능
function 함수(animal) { }
function 함수2(x) {
    if (x.wheel === '4개') {
        console.log(x);
    }
}
함수2({ wheel: '4개', color: 'blue' });
