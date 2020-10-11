const COORD = 'coord';

// https://openweathermap.org/api >
const API_KEY = '41d9d4f7bc69b0e3853d0e9664f2a653';

// object 값을 string 값으로 바꿔 저장
function saveCoord(coordObj) {
  localStorage.setItem(COORD, JSON.stringify(coordObj));
}

// function handleGeoSuccess로 coord 의 latitude, longitude 를 정의
// SaveCoord 로 위에서 나온 값을 Object형태로 LocalStorage 에 value 값으로 저장함
function handleGeoSucess(position) {
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const coordObj = {
    // lat: lat,
    // long: long,
    // 위 방식처럼 키와 밸류이름이 같게 저장하려면 다음과 같이 한다
    lat,
    long,
  };
  saveCoord(coordObj);
}

function handleGeoError() {
  console.log('I cant access geo location');
}

function askCoord() {
  // Navigator 인터페이스는 사용자 에이전트의 상태와 신원 정보를 나타냅내며,
  // 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다

  // 장치의 위치 정보에 접근할 수 있는 Geolocation 객체를 반환합니다.
  // getCurrentPosition() 메서드를 호출해서 사용자의 현재 위치를 얻을 수 있습니다.
  // https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation
  navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}

function loadCoord() {
  const loadedCoord = localStorage.getItem(COORD);
  //   coord 는 좌표로 loadedCoord === null이면 askForCord 가 실행되서 현재 내 위치(getCurrentPosition)를 물어볼 것이다.
  if (loadedCoord === null) {
    askCoord();
  } else {
    //   get wx
  }
}
function init() {
  loadCoord();
}
init();
