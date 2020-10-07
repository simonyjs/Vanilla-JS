// document는 html 파일 자체이다
// index.html에서 js-form 클래스를 가져와서 form에 저장하고
// input태그를 가진 폼을 input에 저장한다
const form = document.querySelector('.js-form'),
  input = form.querySelector('input');
// 로컬저장소 local storage - 작은 JS 정보들이 모인 저장소이다. 개발자 도구 Application 에서 확인 가능함
// value 를 변경해서 LS에 저장하면 key를 호출 할 때 변경값이 나온다
// setItem 으로 키와 밸류를 정의 할 수 있고 getItem 으로 원하는 키의 값을 출력 할 수 있다
// null 은 정의되지 않은(unddfined) can't find 를 뜻한다
/*
localStorage.setItem(key, value);
localStorage.setItem('simon', true);
localStorage.getItem('simon') 
>>> true
localStorage.getItem('username')
>>> null
*/
// LS에 있는 User 정보를 받아서 Name이 나타나게 한다
const greeting = document.querySelector('.js-greeting');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

function paintGreeting(text) {
  greeting.innerText = `Hello ${text}`;
}
// currentUser(Key) 값이 null 이 아니면 (else) paintGreeting 이 실행되고
// form 을 classList 에서 remove 하고 greeting 을 classList 에서 add 하고 나서
// HTML 의 greeting 에서 Hello ${text} 출력
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // currentUser is undefined
  } else {
    // currentUser is defined
    paintGreeting(currentUser);
  }
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function init() {
  loadName();
}

init();
