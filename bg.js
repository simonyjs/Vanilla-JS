// https://unsplash.com
const body = document.querySelector('body');

const IMG_NUMBER = 3;

const UNSPLASH_API_KEY = 'sTRAM16hUNZJ6JNbVDM-6c_j5qLChZVfj2SZU6NqoAI';
const bgDesc = document.querySelector('.js-bg-desc');

function getUnsplashImg(keyword) {
  fetch(
    `https://api.unsplash.com/search/photos/?client_id=${UNSPLASH_API_KEY}&query=${keyword}&orientation=landscape`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
      // console.log(myJson.length);
      const randomNo = Math.floor(Math.random() * myJson.results.length);
      // console.log(myJson.results[randomNo].urls.full);
      const apiImg = new Image();
      apiImg.src = myJson.results[randomNo].urls.full;
      apiImg.classList.add('bgImage');
      // apiImg.addEventListener('loadend', handleImgLoad);
      body.prepend(apiImg);
      const apiImgDescription = myJson.results[randomNo].description;
      const apiImgAltDescription = myJson.results[
        randomNo
      ].alt_description.toUpperCase();
      const apiImgName = myJson.results[randomNo].user.name;
      const apiImgLocation = myJson.results[randomNo].user.location;
      bgDesc.innerText = `  ${
        apiImgDescription === null ? apiImgAltDescription : apiImgDescription
      } by ${apiImgName}  `;
    });
}
// 다운받은 image들의 폴더 src(source) 제공
// body의 자손 class로 image 추가(appendChild)
function paintImage(imgNumber) {
  // Create new HTMLImageElement objects in our script
  // Image() 생성자를 사용하여 새로운 image를 만든다
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  // image.classList.add("bgImage") - bgImage로 class 추가
  image.classList.add('bgImage');
  // appendChild에서 prepend로 바꿔서 body 맨 앞으로 가져옴 Why? 가장 먼저 로드하기 위해서
  body.prepend(image);
  // 만약에 API에서 불러오면 느리기 때문에 다음을 추가한다
  image.addEventListener('loadend', handleImgLoad);
}

function handleImgLoad(apiImg) {
  console.log('finished loading');
  body.prepend(apiImg);
}

function genRandom() {
  // Math.random() 함수는 0 이상 1 미만의 구간에서 approximately uniform 부동소숫점 의사난수를 반환
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  // paintImage(randomNumber);
  getUnsplashImg('aircraft');
}

init();
