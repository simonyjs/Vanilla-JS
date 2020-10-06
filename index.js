// Document Object Module DOM을 이용해서 HTML의 모든 구성요소를 Object로 바꿀 수 있음
// 즉 JS를 통해 가져온 Object를 통해 모든 객체를 제어 가능하다
const title = document.getElementById('title');
console.log(title);
title.innerHTML = 'Hi!!! This is inner HTML!';
console.dir(title);
title.style.color = 'red';
// CSS와 동일하게 사용을 하려면 음... 비슷하게 적용하개 하려면
// Queryselector를 사용한다
// Returns the first element that is a descendant of node that matches selectors.
// querySelector는 셀렉터와 일치하는 노드의 첫번째 자식을 반환하고 일치하는 요소가 없으면 null을 반환한다.
const titleQuery = document.querySelector('#title');
titleQuery.style.color = 'black';
// addEventListener는 이벤트를 감지(Listen)한다
// 윈도우에서 리사이즈 이벤트가 발생하면 함수로 정한 handleResize를 호출한다
// 반드시 호출만 해야한다 왜? 이벤트가 발생했을때만 원하는 함수를 실행하기 위해서이다. ()를 같이 사용하면 즉시 실행된다.
// ()는 실행하는 버튼이다
window.addEventListener('resize', handleResize);
function handleResize() {
  console.log('I have been RESIZED!!!');
}

title.addEventListener('click', handleClick);
function handleClick() {
  title.style.color = 'blue';
}
