const wx = document.querySelector('.js-wx');
const COORD = 'coord';

// https://openweathermap.org/api >
const API_KEY = '41d9d4f7bc69b0e3853d0e9664f2a653';

function getWx(lat, lon) {
  /*Fetch API를 이용하면 Request나 Response와 같은 HTTP의 파이프라인을 구성하는 요소를 조작하는것이 가능합니다.
  fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
네트워크에서 JSON 파일을 가져 와서 콘솔에 인쇄합니다. 
간단한 fetch() 사용 흐름은 인수 한개(가져올 자원의 경로)를 가져오고 응답을 포함하는 약속 (Response 개체)을 반환하는 것입니다.

이것은 단순한 HTTP Response이며, 실제 JSON이 아닙니다. 
response 객체로부터 사진을 가져오기 위해서는 json() 메서드를 사용할 필요가 있습니다. 
(Body의 믹스인 (역주:php의 트레이드와 같은것입니다. )으로 정의되어, 이것은 Request 객체와 Response 객체의 쌍방에 구현되어 있습니다.
*/
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    // .then(function (json) {
    //fetch로 API 서버로부터 전송되는 data가 모두 수신될 때까지 기다린 후(then), data가 수신이 완료된 후 JSON data를 가져온다
    //   console.log(json);
    // JSON data를 console로 확인해보면 body안에 locked: false로 볼 수가 없다
    // })

    // network 패널 안에 있는 response에서 JSON 정보를 console로 출력
    .then(function (response) {
      // Request URL 링크에 있던 이 정보들이 JSON data이다
      // console.log(response.json());
      // pending 대기중(보류중)이라고 출력

      // 결과를 확인하고 json 으로 리턴한다
      return response.json();
    })
    .then(function (json) {
      // response에서 JSON Data 가져온 것을 pending(보류)하지 않고, 바로 JSON Data를 console에 출력
      console.log(json);
      // 원하는 값을 상수로 저장한다
      const place = json.name;
      const country = json.sys.country;
      const humidity = json.main.humidity;
      const temp = Math.round(json.main.temp);
      const feels_like = Math.round(json.main.feels_like);
      const temp_max = Math.ceil(json.main.temp_max);
      const temp_min = Math.floor(json.main.temp_min);
      const description = json.weather[0].description;
      const unixSunrise = json.sys.sunrise;
      const sunriseDate = new Date(unixSunrise * 1000)
      const srHr = sunriseDate.getHours();
      const srMm = sunriseDate.getMinutes();
      const sunrise = `${srHr > 10 ? srHr : `0${srHr}`}:${srMm}`;
      const unixSunset = json.sys.sunset;
      const sunsetDate = new Date(unixSunset * 1000);
      const ssHr = sunsetDate.getHours();
      const ssMm = sunsetDate.getMinutes();
      const sunset = `${ssHr > 10 ? ssHr : `0${ssHr}`}:${ssMm > 10 ? ssMm : `0${ssMm}`}`
      wx.innerText = `${place}, ${country} : ${description.toUpperCase()} 🌡${temp}°C\n Feels:${feels_like}°C | Max:${temp_max}°C | Min:${temp_min}°C\nHumidity:${humidity}% ☀️${sunrise} 🌙${sunset}`;
    });
}

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
    const parsedCoord = JSON.parse(loadedCoord);
    // console.log(parsedCoord);
    getWx(parsedCoord.lat, parsedCoord.long);
  }
}
function init() {
  loadCoord();
}
init();
