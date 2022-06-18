type Fish = { swim: string };
type Bird = { fly: string };
//in 키워드로 object narrowing 가능
//instanceof 키워드로 object narrowing 가능
function 함수(animal: Fish | Bird) {}

//literal type을 만들어 두면 narrowing 편해짐
type 자동차 = { wheel: '4개'; color: string };
type 오토바이 = { wheel: '2개'; color: string };
function 함수2(x: 자동차 | 오토바이) {
  if (x.wheel === '4개') {
    console.log(x);
  }
}

함수2({ wheel: '4개', color: 'blue' });
