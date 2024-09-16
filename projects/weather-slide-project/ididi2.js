import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./reset.css";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [slides, setSlides] = useState([
    {
      id: `${Date.now()}-${Math.random()}`,
      city: "",
      content: "현재 위치 날씨",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  // 쿠키 한 번만 설정 (이미 설정되어 있지 않은 경우)
  useEffect(() => {
    if (!document.cookie.includes("myCookie=value")) {
      document.cookie = "myCookie=value; path=/; SameSite=None; Secure";
    }
  }, []);

  // 슬라이드 시간 계산 함수
  const calculateTimes = (timezoneOffset) => {
    const utcTime = new Date();
    const utcHours = utcTime.getUTCHours();
    const utcMinutes = utcTime.getUTCMinutes();

    const utcOffsetInHours = timezoneOffset / 3600;
    const localHours = (utcHours + utcOffsetInHours) % 24;
    const localTimeString = `${localHours}:${utcMinutes}`;

    const koreanTimeHours = (localHours + (9 - utcOffsetInHours)) % 24;
    const koreanTimeString = `${koreanTimeHours}:${utcMinutes}`;

    return { localTimeString, koreanTimeString };
  };

  const getDayOrNight = (localTime) => {
    console.log(localTime);
    // localTime이 undefined 또는 null인 경우 기본값을 사용
    if (!localTime) {
      console.error("Invalid localTime:", localTime);
      return "day"; // 기본값으로 "day"를 반환 (필요에 따라 수정 가능)
    }

    // localTime이 "HH:MM" 형식이라면 이를 분리해서 현재 날짜에 시간만 설정
    const [hours, minutes] = localTime.split(":").map(Number); // "16:30" -> [16, 30]

    // 현재 날짜를 가져와서 시간과 분을 설정
    const currentDate = new Date();
    currentDate.setHours(hours, minutes, 0, 0); // 시간을 설정 (초와 밀리초는 0으로 초기화)

    const hour = currentDate.getHours(); // 변환된 시간에서 시간(HH) 가져오기

    // 오전 6시부터 오후 6시까지는 "day", 그 외에는 "night" 반환
    return hour >= 6 && hour < 18 ? "day" : "night";
  };

  const weatherVideos = {
    clear: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    rainy: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    cloudy: {
      day: "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    // 다른 날씨 조건 추가 가능
  };

  // 슬라이드의 날씨 및 시간 업데이트 함수
  const updateSlidesWeather = async (slidesToUpdate) => {
    if (!slidesToUpdate || slidesToUpdate.length === 0) {
      console.warn("No slides to update.");
      return;
    }

    const updatedSlides = await Promise.all(
      slidesToUpdate.map(async (slide) => {
        if (slide.city) {
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${slide.city}&appid=${API_KEY}&units=metric&lang=kr`
            );
            const timezoneOffset = response.data.timezone;
            const { localTimeString, koreanTimeString } =
              calculateTimes(timezoneOffset);

            return {
              ...slide,
              temperature: response.data.main.temp,
              description: response.data.weather[0].description,
              localTime: localTimeString,
              koreanTime: koreanTimeString,
            };
          } catch (error) {
            console.error("Error updating slide data:", error);
            return slide; // 에러 발생 시 기존 슬라이드 유지
          }
        }
        return slide;
      })
    );

    setSlides(updatedSlides);
    localStorage.setItem("slides", JSON.stringify(updatedSlides));
  };

  useEffect(() => {
    const savedSlides = JSON.parse(localStorage.getItem("slides")) || [
      {
        id: `${Date.now()}-${Math.random()}`,
        city: "",
        content: "현재 위치 날씨",
      },
    ];
    setSlides(savedSlides);

    updateSlidesWeather(savedSlides);
  }, []);

  const fetchCityCoordinates = async (city) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}&language=en`
      );

      if (response.data.results.length === 0) {
        throw new Error("도시를 찾을 수 없습니다.");
      }

      const { formatted_address } = response.data.results[0];
      return formatted_address;
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
      throw new Error("도시를 찾을 수 없습니다.");
    }
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (currentLocation) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${API_KEY}&units=metric&lang=kr`
          );
          setWeatherData(response.data);
          setSlides((prevSlides) => {
            const updatedSlides = [...prevSlides];
            updatedSlides[0] = {
              ...updatedSlides[0],
              city: response.data.name,
              content: `${response.data.name} 날씨`,
            };
            localStorage.setItem("slides", JSON.stringify(updatedSlides));
            return updatedSlides;
          });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchWeatherData();
  }, [currentLocation]);

  const addSlide = async () => {
    if (!newCity.trim()) return;

    try {
      const cityInEnglish = await fetchCityCoordinates(newCity);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInEnglish}&appid=${API_KEY}&units=metric&lang=kr`
      );

      const timezoneOffset = response.data.timezone;
      const { localTimeString, koreanTimeString } =
        calculateTimes(timezoneOffset);

      const newSlide = {
        id: `${Date.now()}-${Math.random()}`,
        city: cityInEnglish,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        localTime: localTimeString,
        koreanTime: koreanTimeString,
        weatherId: response.data.weather[0].id,
      };

      const updatedSlides = [...slides, newSlide];
      setSlides(updatedSlides);
      localStorage.setItem("slides", JSON.stringify(updatedSlides));

      await updateSlidesWeather(updatedSlides);

      setNewCity("");
      setShowModal(false);
    } catch (error) {
      setErrorMessage("해당 도시를 찾을 수 없습니다.");
      console.error("Error fetching weather data for the city:", error);
    }
  };

  const deleteSlide = (id) => {
    const updatedSlides = slides.filter((slide) => slide.id !== id);
    setSlides(updatedSlides);

    localStorage.setItem("slides", JSON.stringify(updatedSlides));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // const getKoreanTime = () => {
  //   const date = new Date();
  //   const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  //   const koreanTime = new Date(utcTime + 9 * 3600000);
  //   return koreanTime.toLocaleTimeString("ko-KR", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     hour12: true,
  //   });
  // };

  const getKoreanTime = () => {
    const date = new Date();
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const koreanTime = new Date(utcTime + 9 * 3600000);

    // '오전', '오후' 제거 및 공백 처리
    const timeString = koreanTime.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // '오전' 또는 '오후'를 제거하고 공백 제거
    return timeString.replace(/오전 |오후 /g, "");
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {slides.map((slide, index) => {
          const weatherCondition = slide.weatherId || "clear";

          // 첫 번째 슬라이드일 때는 weatherData에서 localTime 사용
          const localTime =
            index === 0 && weatherData ? slide.localTime : getKoreanTime();
          console.log(slide.localTime);

          // getDayOrNight 함수에서 localTime을 사용해 시간대 판단
          const timeOfDay = getDayOrNight(localTime);

          const videoSrc = weatherVideos[weatherCondition]
            ? weatherVideos[weatherCondition][timeOfDay]
            : "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080";

          return (
            <div key={slide.id} className="slide">
              {index === 0 && weatherData ? (
                <div>
                  <div id="backgroundVideo">
                    <iframe
                      src={videoSrc}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h1>{weatherData.name} 날씨</h1>
                  <p>온도: {weatherData.main.temp}°C</p>
                  <p>날씨: {weatherData.weather[0].description}</p>
                  <p>한국 시간 (KST): {getKoreanTime()}</p>
                </div>
              ) : (
                <div>
                  <div id="backgroundVideo">
                    <iframe
                      src={videoSrc}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h1>{slide.city} 날씨</h1>
                  <p>온도: {slide.temperature}°C</p>
                  <p>날씨: {slide.description}</p>
                  <p>현지 시간 (KST): {slide.localTime}</p>
                  <p>한국 시간 (KST): {getKoreanTime()}</p>
                  <p>weatherID: {slide.weatherId}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button className="prev" onClick={goToPreviousSlide}>
        이전
      </button>
      <button className="next" onClick={goToNextSlide}>
        다음
      </button>

      <button onClick={() => setShowModal(true)} className="slide__add-btn">
        슬라이드 추가
      </button>

      {showModal && (
        <div className="modal">
          <h2>새로운 나라 추가</h2>
          <input
            type="text"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            placeholder="도시 이름을 입력하세요"
          />
          <button onClick={addSlide}>추가</button>
          <button onClick={() => setShowModal(false)}>취소</button>
          <div className="delete-buttons">
            {slides.map((slide) => (
              <div key={slide.id}>
                <span>{slide.city}</span>
                {slide.id !== slides[0].id && (
                  <button onClick={() => deleteSlide(slide.id)}>삭제</button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
