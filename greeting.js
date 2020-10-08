// document는 html 파일 자체이다
// index.html에서 js-form 클래스를 가져와서 form에 저장하고
// input태그를 가진 폼을 input에 저장한다
const form = document.querySelector('.js-form'),
  input = form.querySelector('input');

// 로컬저장소 local storage - 작은 JS 정보들이 모인 저장소이다. 개발자 도구 Application 에서 확인 가능함
// value 를 변경해서 LS에 저장하면 key를 호출 할 때 변경값이 나온다
// setItem 으로 키와 밸류를 정의 할 수 있고 getItem 으로 원하는 키의 값을 출력 할 수 있다
// null 은 정의되지 않은(unddfined) can't find 를 뜻한다

// ## localStorage
// - 사용자의 로컬에 있는 `Storage` 객체에 접근하게 해준다.
// - `localStorage` 는 세션 만료가 없어 브라우저가 닫혀도 지워지지 않는다.
// 만약 세션이 만료된 경우에 데이터를 지워야 한다면, `sessionStorage` 에 저장한다.

/*
localStorage.setItem(key, value);
localStorage.setItem('simon', true);
localStorage.getItem('simon') 
>>> true
localStorage.getItem('username')
>>> null
*/

// 사용자가 이름을 입력하고 엔터를 누를 시 입력 창이 사라지고 유저 이름이 나타나는 소스를 구현하였다.
// 이름을 기입하지 않았을 경우, 유저이름을 입력해야하는 창이 뜨게 되고, 기존에 입력했을 경우,
// 저장된 이름을 띄워주는 형식으로 구현되어 있다.

// LS에 있는 User 정보를 받아서 Name이 나타나게 한다
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

// function paintGreeting(text) {
//   greeting.innerText = `Hello ${text}`;
// }

// currentUser(Key) 값이 null 이 아니면 (else) paintGreeting 이 실행되고
// form 을 classList 에서 remove 하고 greeting 을 classList 에서 add 하고 나서
// HTML 의 greeting 에서 Hello ${text} 출력

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // currentUser is undefined
  } else {
    // currentUser is defined
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
