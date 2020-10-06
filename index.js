// 2.7 DOM - If else - Function practice Two
/*
JS에서 CSS가 하는 일을 겹쳐서 하기 싫어서
css에서 h1의 색깔을 지정하고 html에서 클래스를 지정함
*/
const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';
// === 는 !== 반대이다
// 만약 currentClass 가 "clicked" 가 아니라면 (!==)
// title의 className을 "clicked" 라고 부여하고 그렇지 않으면 빈칸으로 둔다
function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = '';
  }
}
function init() {
  title.addEventListener('click', handleClick);
}
init();
// 문제는 click event 가 발생하면 class="clicked" 로 바뀌면서 class="button"이 없어진다
// 그래서 classList를 활용해서 추가 삭제만 가능하게 한다.
function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}
//가독성이 좋게 함수를 바꿀 수 있음
function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}
// toggle 이용하기
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
