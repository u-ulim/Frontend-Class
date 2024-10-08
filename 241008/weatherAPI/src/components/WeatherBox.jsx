import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: rgba(240, 255, 255, 0.6);
  padding: 50px;
`;
const City = styled.h1`
  font-size: 22px;
`;
const Weather = styled.h2`
  font-size: 30px;
`;
const Desc = styled.h3`
  font-size: 26px;
  font-weight: 600;
`;

const WeatherBox = ({ weather }) => {
  console.log(weather);
  let cityName;
  switch (weather?.name) {
    case "Jamwon-dong":
      cityName = "서울시 잠원동";
      break;
    case "Seoul":
      cityName = "서울";
      break;
    case "Paris":
      cityName = "파리";
      break;
    case "New York":
      cityName = "뉴욕";
      break;
    case "Tokyo":
      cityName = "도쿄";
      break;
    default:
      cityName = weather?.name || "도시 정보 없음"; // 기본값
  }

  let weatherMain;
  switch (weather?.weather[0].main) {
    case "Clear":
      weatherMain = "오늘 날씨 맑음";
      break;
    case "Clouds":
      weatherMain = "오늘 날씨 구름";
      break;
    case "Mist":
      weatherMain = "오늘 날씨 안개";
      break;
    case "Rain":
      weatherMain = "오늘 날씨 비옴";
      break;
  }
  return (
    <>
      {weather ? (
        <Wrapper>
          <City>도시: {cityName}</City>
          <Weather>
            온도: {weather.main?.temp}℃ / 습도: {weather.main?.humidity}%
          </Weather>
          <Desc>현재 날씨: {weatherMain}</Desc>
        </Wrapper>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default WeatherBox;
