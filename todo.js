// # 🔖 TO-DO 리스트 추가
// 사용자가 입력 창에 `TO-DO` 를 입력하면 리스트에 추가되도록 구현한다.
// `TO-DO` 에는 완료 버튼과 입력한 텍스트가 들어가게 되고 완료 버튼을 누를 시에 종료하게 되도록 구현한다.

const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

// ## document.createElement
// - `HTML` 내의 `Tag` 를 생성한다. `Tag` 를 잘못 입력했을 경우엔 `HTMLUnknownElement` 를 반환한다.
// - 생성된 객체의 속성을 추가 및 변경하여 동적으로 화면에 추가할 수 있다.

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerText = '❌';
  const span = document.createElement('span');
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
