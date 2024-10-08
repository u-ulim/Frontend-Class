import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";

const GlobalStyles = createGlobalStyle`

  * { 
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url("https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop")
    center / cover no-repeat; */

  // => 두 가지 방법
  /* background: ${(props) => `url(${props.img})`} center/cover no-repeat; */
  background: ${({ img }) => `url(${img})`} center/cover no-repeat;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// .env 파일은 무조건 루트 폴더에 있어야 한다.
const VITE_WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const VITE_UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

// const WEATEHR_API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const cities = ["paris", "new york", "tokyo", "seoul"];
  let [loading, setLoading] = useState(true);
  const [backBg, setBackBg] = useState(null);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false); // 배경 이미지가 이미 로드되었는지 체크

  const getWeahterByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_WEATHER_API_KEY}&units=metric`;
    // setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    // setLoading(false);
  };

  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      console.log(lat, lon);
      getWeahterByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${VITE_WEATHER_API_KEY}&units=metric`;
      // setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      // setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(() => null);
    } else {
      setCity(() => city);
    }

    console.log(city);
  };

  const getBackground = () => {
    if (backgroundLoaded) return;
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${VITE_UNSPLASH_API_KEY}`;
    setLoading(true); // 배경 이미지 가져오기 시작 시 로딩 상태 true
    fetch(getImg)
      .then((res) => res.json())
      .then(({ urls: { full } }) => {
        setBackBg(full);
        setBackgroundLoaded(true);
      }) // 배경 이미지가 로드되었음을 표시 })
      .finally(() => setLoading(false)); // 이미지 가져온 후 로딩 상태 false
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  useEffect(() => {
    getBackground();
  }, []);

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]); // city 변경 시 getWeatherByCity 호출

  return (
    <>
      <GlobalStyles />
      <Wrapper img={backBg}>
        <Contents>
          <LoaderWrapper>
            <HashLoader
              color="#f88cb6"
              loading={loading}
              // cssOverride={override}
              // size={150}
              // aria-label="Loading Spinner"
              // data-testid="loader"
            />
          </LoaderWrapper>

          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </>
  );
}

export default App;
