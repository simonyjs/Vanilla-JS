const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
// 먼저 toDos를 Array 로 정의해주고, 다음으로 const toDoObj 로 text, id 각각 text(key): text(value)
// 그리고 id는 toDo를 Array화 한 것에서 +1을 해주는 것으로 정의한 뒤 toDo에 toDoObj를 push(추가)하게끔 했다.
const toDos = [];

function saveToDos() {
  // 이렇게 하면 LocalStorage 에는 그냥 object 로 저장됨 즉 저장은 무조건 String 으로 되기 때문에 풀어줘야 함
  // localStorage.setItem(TODOS_LS, toDos);

  // JSON.stringify(toDos) - JSON, JavaScript Object Notation
  // JavaScript object를 stirng으로 바꿔줌
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  // newId를 정의하고 li.id를 newId와 같게 설정한 뒤 toDoObj의 id가 newId의 값을 같게 했다
  const newId = toDos.length + 1;
  delBtn.innerText = '❌';
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  // const toDoObj(Object)
  // text(key): text(value) / id = toDo를 [] list화 한 것에서 +1함 / toDo에 toDoObj를 push(추가)함
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  // 반드시 push(Array 에 추가) 한 후에 saveToDos 를 호출해야 함 왜? Array 가 비어서 저장할 내용이 없음
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

// TODO_LS를 load(가져)온 뒤 parse를 통해 string을 object로 바꾸고
// parsedToDo 각각에 대해(forEach) paintToDo function(함수)를 실행함
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // console.log(loadedToDos); - console에 LS에 저장된 toDo 목록을 보여줌
    // console에 출력이 되지만, string 값으로 출력됨
    console.log(loadedToDos);
    // 위에서 바꿔준 string값을 다시 object 값으로 바꿔야함 > JSON.parse() > 다시 JSON사용
    const parsedToDos = JSON.parse(loadedToDos);
    // JSON.parse(x) - parse(parsing, 문법적 해부)
    // loadToDo 값인 string과 parsedToDo 값인 object를 console로 출력해 비교해봄
    console.log(parsedToDos);
    // forEach - array([] list)를 위한 function(함수) : 주어진 함수를 배열 요소 각각에 대해 실행합니다
    // parsedToDo에 있는 각각의 항목(text로 입력한 값)에 대해 function를 실행함
    parsedToDos.forEach(function (toDo) {
      // toDo 는 그냥 파라미터 이름일 뿐이다 parsedToDos 의 element라고 해석하자
      console.log(toDo.text);
      paintToDo(toDo.text);
      // 그 결과로 원래는 li id가 추가되어도 LS에 저장되지 않아서 화면을 새로고침하면 적어놓았던 toDos 가 지워졌었는데,
      // 지금은 LS에 toDos value가 key와 대응하여 저장되어 화면 새로고침을 해도 toDos 가 화면에서 지워지지 않고 계속해서 남아있다.
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
