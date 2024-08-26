import env from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.API_KEY}&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector(".icon");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const city = document.querySelector(".city");

      let weatherName;
      // data?.weather[0]?.main
      switch (data.weather[0].main) {
        case "Clouds":
          weatherName = "구름";
          break;
        case "Rain":
          weatherName = "비";
          break;
      }

      let cityName;
      // data?.weather[0]?.main
      switch (data.name) {
        case "Jamwon-dong":
          cityName = "서울시 잠원동";
          break;
      }

      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      // 한국은 미터법을 따른다. 나라에 따른 표기법 차이
      temp.innerText = `${data.main.temp} ℃`;
      weather.innerText = `${weatherName}`;
      city.innerText = `${cityName}`;
      console.log(data);
    });
};

// api키는 보안을 해야한다.
const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);
  getCurrentWeather(latitude, longitude);
};
const errorHandler = (err) => {
  const noti = document.querySelector(".noti");
  noti.style.display = "block";

  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("Geolocation id not Available!");
}
