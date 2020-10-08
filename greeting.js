const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// form 빈칸에 text를 적고 Enter를 하면 form 을 submit 하는 것 이다
// form 을 submit 하면 특정한 곳 으로 전송한다
// 또한 입력한 text 가 기본값으로 사라지고 빈칸이 된다

// handleSubmit(event) 로 submit event 가 발생하면...
function handleSubmit(event) {
  // 기본값으로 사라지는 행동을 방지한다
  event.preventDefault();
  // form 에 입력한 값을 currentValue 상수에 저장한다
  // input.placeholder 를 사용하면 화면에 나타나는 내용을 바꿀 수 있다
  const currentValue = input.value;
  // console.log(currentValue);
  paintGreeting(currentValue);
  // saveName 함수를 생성하고 입력값을 저장하도록 한다
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  // submit 이 발생했을때 handleSubmit 을 호출한다
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // 저장된 currentUser 값이 없을 경우 askForName 함수를 실행한다
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
