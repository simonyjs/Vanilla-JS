const clockContainner = document.querySelector('.js-clock');
const clockTitle = clockContainner.querySelector('h1');

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  // 조건부 삼항 연산자(ternary operator)는 JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자입니다.
  // 보통 if 명령문의 단축 형태로 쓰입니다.
  // condition ? exprIfTrue : exprIfFalse
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
  getTime();
  //setInterval(function , miliseconds)
  setInterval(getTime, 1000);
}

init();
