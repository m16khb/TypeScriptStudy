let 제목 = document.querySelector('#title');
//왼쪽이 오른쪽의 자식이냐?
// if (제목 instanceof Element) {
//   제목.innerHTML = '반가워요';
// }
//optional chaining
if (제목?.innerHTML) {
  제목.innerHTML = '반가워요';
}

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://www.kakao.com';
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', () => {
  let 이미지 = document.querySelector('#image');
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
  }
});

let 네이버들 = document.querySelectorAll('.naver');
네이버들.forEach((element: HTMLAnchorElement) => {
  element.href = 'https://www.kakao.com';
});
