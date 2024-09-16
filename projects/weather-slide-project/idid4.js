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
      localTime: new Date().toTimeString().slice(0, 5), // 기본값으로 현재 시간 설정
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  // 슬라이드 시간 계산 함수
  const calculateTimes = (timezoneOffset) => {
    const utcTime = new Date();
    const utcHours = utcTime.getUTCHours();
    const utcMinutes = utcTime.getUTCMinutes();

    const utcOffsetInHours = timezoneOffset / 3600;
    const localHours = (utcHours + utcOffsetInHours) % 24;

    // 시간과 분이 한 자릿수일 경우 앞에 0을 붙임
    const formattedHours = localHours < 10 ? `0${localHours}` : localHours;
    const formattedMinutes = utcMinutes < 10 ? `0${utcMinutes}` : utcMinutes;

    const localTimeString = `${formattedHours}:${formattedMinutes}`;

    const koreanTimeHours = (localHours + (9 - utcOffsetInHours)) % 24;
    const koreanTimeString = `${koreanTimeHours}:${utcMinutes}`;

    return { localTimeString, koreanTimeString };
  };

  const getDayOrNight = (localTime) => {
    if (!localTime) {
      console.error("Invalid localTime:", localTime);
      return "day"; // 기본값으로 "day" 반환
    }

    // localTime이 "HH:MM" 형식이라면 이를 분리해서 현재 날짜에 시간만 설정
    const [hours, minutes] = localTime.split(":").map(Number); // "16:30" -> [16, 30]

    const currentDate = new Date();
    currentDate.setHours(hours, minutes, 0, 0); // 시간을 설정

    const hour = currentDate.getHours();
    return hour >= 6 && hour < 18 ? "day" : "night";
  };

  const weatherVideos = {
    맑음: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    구름_한_점_없음: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    청명한_하늘: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    튼구름: {
      day: "https://www.youtube.com/embed/JpSTHNNjBr8?autoplay=1&mute=1&loop=1&playlist=JpSTHNNjBr8&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    구름_많음: {
      day: "https://www.youtube.com/embed/JpSTHNNjBr8?autoplay=1&mute=1&loop=1&playlist=JpSTHNNjBr8&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    흐림: {
      day: "https://www.youtube.com/embed/JpSTHNNjBr8?autoplay=1&mute=1&loop=1&playlist=JpSTHNNjBr8&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    조금_흐림: {
      day: "https://www.youtube.com/embed/JpSTHNNjBr8?autoplay=1&mute=1&loop=1&playlist=JpSTHNNjBr8&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    가벼운_비: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    비: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    강한_비: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    이슬비: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    약한_이슬비: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    보슬비: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/bPUSrX4w9j8?autoplay=1&mute=1&loop=1&playlist=bPUSrX4w9j8&vq=hd1080",
    },
    뇌우: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    천둥번개: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    강한_뇌우: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    눈: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    가벼운_눈: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    강한_눈: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    안개: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    옅은_안개: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    실안개: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    연무: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    짙은_안개: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    먼지: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    황사: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    모래바람: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    모래_폭풍: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    화산재: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    돌풍: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
    토네이도: {
      day: "https://www.youtube.com/embed/szj59j0hz_4?autoplay=1&mute=1&loop=1&playlist=szj59j0hz_4&vq=hd1080",
      night:
        "https://www.youtube.com/embed/ktvTqknDobU?autoplay=1&mute=1&loop=1&playlist=ktvTqknDobU&vq=hd1080",
    },
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
              localTime: localTimeString || "12:00", // 기본값을 추가
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
        localTime: new Date().toTimeString().slice(0, 5), // 기본값으로 현재 시간
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
              localTime: calculateTimes(response.data.timezone).localTimeString,
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
        localTime: localTimeString || "12:00", // 기본값 설정
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

  const getKoreanTime = () => {
    const date = new Date();
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const koreanTime = new Date(utcTime + 9 * 3600000);

    const timeString = koreanTime.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return timeString;
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {slides.map((slide, index) => {
          // console.log(weatherData.weather[0].description);

          // const weatherCondition = slide.description || "맑음";
          const weatherCondition = slide.description;

          console.log(weatherCondition);

          const localTime = slide.localTime || "12:00"; // 기본값 제공
          const timeOfDay = getDayOrNight(localTime);

          const videoSrc = weatherVideos[weatherCondition]
            ? weatherVideos[weatherCondition][timeOfDay]
            : // : "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080";
              "";

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
