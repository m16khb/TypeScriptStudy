var 제목 = document.querySelector('#title');
//왼쪽이 오른쪽의 자식이냐?
// if (제목 instanceof Element) {
//   제목.innerHTML = '반가워요';
// }
//optional chaining
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) {
    제목.innerHTML = '반가워요';
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://www.kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    var 이미지 = document.querySelector('#image');
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = 'new.jpg';
    }
});
var 네이버들 = document.querySelectorAll('.naver');
네이버들.forEach(function (element) {
    element.href = 'https://www.kakao.com';
});
