// Document Object Module DOM을 이용해서 HTML의 모든 구성요소를 Object로 바꿀 수 있음
// 즉 JS를 통해 가져온 Object를 통해 모든 객체를 제어 가능하다
const title = document.getElementById('title');
console.log(title);
title.innerHTML = 'Hi!!! This is inner HTML!';
