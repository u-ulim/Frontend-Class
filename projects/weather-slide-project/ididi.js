// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import "./reset.css";

// const App = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [weatherData, setWeatherData] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [slides, setSlides] = useState([
//     {
//       id: `${Date.now()}-${Math.random()}`,
//       city: "",
//       content: "현재 위치 날씨",
//     },
//   ]);
//   const [showModal, setShowModal] = useState(false);
//   const [newCity, setNewCity] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
//   const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

//   // 슬라이드 시간 계산 함수
//   const calculateTimes = (timezoneOffset) => {
//     const utcTime = new Date();
//     const utcHours = utcTime.getUTCHours();
//     const utcMinutes = utcTime.getUTCMinutes();

//     const utcOffsetInHours = timezoneOffset / 3600;
//     const localHours = (utcHours + utcOffsetInHours) % 24;
//     const localTimeString = `${localHours}:${utcMinutes}`;

//     const koreanTimeHours = (localHours + (9 - utcOffsetInHours)) % 24;
//     const koreanTimeString = `${koreanTimeHours}:${utcMinutes}`;

//     return { localTimeString, koreanTimeString };
//   };

//   // 슬라이드의 날씨 및 시간 업데이트 함수
//   const updateSlidesWeather = async (slidesToUpdate) => {
//     // slidesToUpdate가 존재하지 않으면 빈 배열로 처리
//     if (!slidesToUpdate || slidesToUpdate.length === 0) {
//       console.warn("No slides to update.");
//       return;
//     }

//     console.log("Updating slides weather for:", slidesToUpdate); // 상태 확인

//     const updatedSlides = await Promise.all(
//       slidesToUpdate.map(async (slide) => {
//         if (slide.city) {
//           try {
//             const response = await axios.get(
//               `https://api.openweathermap.org/data/2.5/weather?q=${slide.city}&appid=${API_KEY}&units=metric&lang=kr`
//             );
//             const timezoneOffset = response.data.timezone;
//             const { localTimeString, koreanTimeString } =
//               calculateTimes(timezoneOffset);

//             return {
//               ...slide,
//               temperature: response.data.main.temp,
//               description: response.data.weather[0].description,
//               localTime: localTimeString,
//               koreanTime: koreanTimeString,
//             };
//           } catch (error) {
//             console.error("Error updating slide data:", error);
//             return slide; // 에러 발생 시 기존 슬라이드 유지
//           }
//         }
//         return slide;
//       })
//     );

//     // 상태 업데이트와 로컬 스토리지 저장
//     setSlides(updatedSlides);
//     localStorage.setItem("slides", JSON.stringify(updatedSlides)); // 로컬 스토리지 업데이트
//   };

//   // 1. 로컬 스토리지에서 슬라이드 불러오기 및 날씨 업데이트
//   useEffect(() => {
//     const savedSlides = JSON.parse(localStorage.getItem("slides")) || [
//       {
//         id: `${Date.now()}-${Math.random()}`,
//         city: "",
//         content: "현재 위치 날씨",
//       },
//     ];
//     setSlides(savedSlides);

//     // 슬라이드의 날씨 정보 업데이트
//     const updateSlidesWeather = async (slidesToUpdate) => {
//       const updatedSlides = await Promise.all(
//         slidesToUpdate.map(async (slide) => {
//           if (slide.city) {
//             try {
//               const response = await axios.get(
//                 `https://api.openweathermap.org/data/2.5/weather?q=${slide.city}&appid=${API_KEY}&units=metric&lang=kr`
//               );
//               const timezoneOffset = response.data.timezone;
//               const { localTimeString, koreanTimeString } =
//                 calculateTimes(timezoneOffset);

//               return {
//                 ...slide,
//                 temperature: response.data.main.temp,
//                 description: response.data.weather[0].description,
//                 localTime: localTimeString,
//                 koreanTime: koreanTimeString,
//               };
//             } catch (error) {
//               console.error("Error updating slide data:", error);
//               return slide;
//             }
//           }
//           return slide;
//         })
//       );

//       setSlides(updatedSlides);
//       localStorage.setItem("slides", JSON.stringify(updatedSlides)); // 로컬 스토리지 업데이트
//     };

//     // 페이지 로드 시 슬라이드의 날씨 업데이트 실행
//     updateSlidesWeather(savedSlides);
//   }, []); // 빈 배열로 설정해 한 번만 실행 (새로고침 시도 포함)

//   // 2.현재 위치 날씨 데이터 가져오기
//   useEffect(() => {
//     const getLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setCurrentLocation({ latitude, longitude }); // 위치 정보 설정
//           },
//           (error) => {
//             console.error("Error getting location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser.");
//       }
//     };

//     getLocation(); // 위치 정보 가져오기
//   }, []);

//   // 3. 현재 위치 날씨 데이터 가져와서 슬라이드에 추가시키기
//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       if (currentLocation) {
//         try {
//           const response = await axios.get(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${API_KEY}&units=metric&lang=kr`
//           );
//           console.log(response);
//           console.log(response.data);
//           setWeatherData(response.data);
//           setSlides((prevSlides) => {
//             const updatedSlides = [...prevSlides];
//             updatedSlides[0] = {
//               ...updatedSlides[0],
//               city: response.data.name,
//               content: `${response.data.name} 날씨`,
//             };
//             localStorage.setItem("slides", JSON.stringify(updatedSlides));
//             return updatedSlides;
//           });
//         } catch (error) {
//           console.error("Error fetching weather data:", error);
//         }
//       }
//     };

//     fetchWeatherData();
//   }, [currentLocation]);

//   // GOOGLE GEOCODING API로 도시 좌표 가져오기
//   const fetchCityCoordinates = async (city) => {
//     try {
//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}&language=en`
//       );
//       if (response.data.results.length === 0) {
//         throw new Error("도시를 찾을 수 없습니다.");
//       }

//       const { formatted_address } = response.data.results[0];
//       return formatted_address;
//     } catch (error) {
//       throw new Error("도시를 찾을 수 없습니다.");
//     }
//   };

//   // 새로운 슬라이드 추가 함수
//   const addSlide = async () => {
//     if (!newCity.trim()) return;

//     try {
//       const cityInEnglish = await fetchCityCoordinates(newCity); // 도시 이름 변환

//       // 날씨 데이터 가져오기
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityInEnglish}&appid=${API_KEY}&units=metric&lang=kr`
//       );

//       // 시간 계산
//       const timezoneOffset = response.data.timezone;
//       const { localTimeString, koreanTimeString } =
//         calculateTimes(timezoneOffset);

//       // 새 슬라이드 생성
//       const newSlide = {
//         id: `${Date.now()}-${Math.random()}`,
//         city: cityInEnglish,
//         temperature: response.data.main.temp,
//         description: response.data.weather[0].description,
//         localTime: localTimeString,
//         koreanTime: koreanTimeString,
//         weatherId: response.data.weather[0].id,
//       };

//       const updatedSlides = [...slides, newSlide]; // 새로운 슬라이드를 추가
//       setSlides(updatedSlides); // 상태 업데이트
//       console.log("Updated slides after adding:", updatedSlides); // 상태 확인

//       // 로컬 스토리지에 저장
//       localStorage.setItem("slides", JSON.stringify(updatedSlides));

//       // 슬라이드 추가 후 날씨 업데이트 (추가된 슬라이드 포함)
//       await updateSlidesWeather(updatedSlides); // 비동기 함수 대기

//       // 입력 필드 초기화 및 모달창 닫기
//       setNewCity("");
//       setShowModal(false);
//     } catch (error) {
//       setErrorMessage("해당 도시를 찾을 수 없습니다.");
//       console.error("Error fetching weather data for the city:", error);
//     }
//   };

//   // 슬라이드 삭제 함수
//   const deleteSlide = (id) => {
//     const updatedSlides = slides.filter((slide) => slide.id !== id);
//     setSlides(updatedSlides);

//     localStorage.setItem("slides", JSON.stringify(updatedSlides)); // 로컬 스토리지 저장
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const goToPreviousSlide = () => {
//     setCurrentSlide(
//       (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
//     );
//   };
//   // 한국 시간 계산 함수 (UTC+9) - 시각과 분까지만 반환
//   const getKoreanTime = () => {
//     const date = new Date();
//     const utcTime = date.getTime() + date.getTimezoneOffset() * 60000; // UTC 시간
//     const koreanTime = new Date(utcTime + 9 * 3600000); // UTC+9 (한국 시간)
//     return koreanTime.toLocaleTimeString("ko-KR", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true, // 12시간 형식
//     });
//   };

//   return (
//     <div className="slider-container">
//       <div
//         className="slider"
//         style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={slide.id} className="slide">
//             {index === 0 && weatherData ? (
//               <div>
//                 {/* <video autoPlay muted loop id="backgroundVideo">

//                   브라우저에서 동영상을 지원하지 않습니다.
//                 </video> */}
//                 <div id="backgroundVideo">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src="https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&loop=1&playlist=0P1dxSET6Kk"
//                     title="YouTube video player"
//                     frameborder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerpolicy="strict-origin-when-cross-origin"
//                     allowfullscreen
//                   ></iframe>
//                 </div>
//                 <div>ddd</div>
//                 <h1>{weatherData.name} 날씨</h1> {/* 도시 이름 표시 */}
//                 <p>온도: {weatherData.main.temp}°C</p>
//                 <p>날씨: {weatherData.weather[0].description}</p>
//                 {/* 한국 시간 (시간만 표시) */}
//                 <p>한국 시간 (KST): {getKoreanTime()}</p> {/* 한국 시간 표시 */}
//               </div>
//             ) : (
//               <div>
//                 {/* <video autoPlay muted loop id="backgroundVideo">
//                   브라우저에서 동영상을 지원하지 않습니다.
//                 </video> */}
//                 <div id="backgroundVideo">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src="https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&loop=1&playlist=0P1dxSET6Kk"
//                     title="YouTube video player"
//                     frameborder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerpolicy="strict-origin-when-cross-origin"
//                     allowfullscreen
//                   ></iframe>
//                 </div>
//                 <div>ddd</div>
//                 <h1>{slide.city} 날씨</h1> {/* 나머지 슬라이드 도시 이름 */}
//                 <p>온도: {slide.temperature}°C</p> {/* 나머지 슬라이드 온도 */}
//                 <p>날씨: {slide.description}</p>{" "}
//                 <p>현지 시간 (KST): {slide.localTime}</p> {/* 한국 시간 */}
//                 {/* 나머지 슬라이드 날씨 설명 */}
//                 <p>한국 시간 (KST): {getKoreanTime()}</p> {/* 한국 시간 표시 */}
//                 <p>weatherID: {slide.weatherId}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <button className="prev" onClick={goToPreviousSlide}>
//         이전
//       </button>
//       <button className="next" onClick={goToNextSlide}>
//         다음
//       </button>

//       {/* 슬라이드 추가 버튼 */}
//       <button onClick={() => setShowModal(true)} className="slide__add-btn">
//         슬라이드 추가
//       </button>

//       {/* 모달창 */}
//       {showModal && (
//         <div className="modal">
//           <h2>새로운 나라 추가</h2>
//           <input
//             type="text"
//             value={newCity}
//             onChange={(e) => setNewCity(e.target.value)}
//             placeholder="도시 이름을 입력하세요"
//           />

//           <button onClick={addSlide}>추가</button>
//           <button onClick={() => setShowModal(false)}>취소</button>
//           {/* 슬라이드 삭제 버튼 */}
//           <div className="delete-buttons">
//             {slides.map((slide) => (
//               <div key={slide.id}>
//                 <span>{slide.city}</span>
//                 {slide.id !== slides[0].id && ( // 첫 번째 슬라이드는 삭제하지 않도록 예외 처리
//                   <button onClick={() => deleteSlide(slide.id)}>삭제</button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

/////////////////////////////////

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

  // 날씨와 시간에 따른 YouTube 동영상 필터링
  const getDayOrNight = (localTime) => {
    const hour = new Date(localTime).getHours();
    return hour >= 6 && hour < 18 ? "day" : "night";
  };

  const weatherVideos = {
    clear: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
    },
    rainy: {
      day: "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
      night:
        "https://www.youtube.com/embed/0P1dxSET6Kk?autoplay=1&mute=1&loop=1&playlist=0P1dxSET6Kk&vq=hd1080",
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

  const getKoreanTime = () => {
    const date = new Date();
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const koreanTime = new Date(utcTime + 9 * 3600000);
    return koreanTime.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {slides.map((slide, index) => {
          const weatherCondition = slide.weatherId || "clear";
          const timeOfDay = getDayOrNight(slide.localTime);
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
