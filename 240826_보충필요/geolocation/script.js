// geolocation => 사용자의 위치ㅣ를 파악하기 위한 목적 API

// getCurrentPosition(successsCB, errorCB, options)

const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도: ${position.coords.latitude}, 경도: ${position.coords.longitude}`;
};

const erroPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, erroPosition);
    const options = {
      enableHightAccuracy: true,
      maximumAge: 0, // 가장 최신, 
      timeout: 5000, // 5초라는 시간동안 못 가지고 왔다. 새로 고침하시오. 
    }
    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      erroPosition,
      options
    );
    setTimeout(() => {
      navigator.geolocation.clearWatch();
    }, 30000);
  } else {
    alert("Geolocatiohn을 지원하지 않습니다.");
  }
});
