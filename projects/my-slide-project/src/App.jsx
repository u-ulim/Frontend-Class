// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import "./reset.css";

// const App = () => {
//   const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
//   const [weatherData, setWeatherData] = useState(null); // 날씨 데이터 상태
//   const [currentLocation, setCurrentLocation] = useState(null); // 현재 위치 정보 상태
//   const [slides, setSlides] = useState([
//     {
//       id: `${Date.now()}-${Math.random()}`,
//       city: "",
//       content: "현재 위치 날씨",
//     }, // 고유한 ID 생성
//   ]);
//   const [showModal, setShowModal] = useState(false); // 모달창 상태
//   const [newCity, setNewCity] = useState(""); // 새롭게 추가할 도시 이름

//   // 1. 로컬 스토리지에서 위치 정보 불러오기
//   useEffect(() => {
//     // localStorage에서 슬라이드 정보들 가져오기
//     const savedSlides = JSON.parse(localStorage.getItem("slides")) || [
//       { id: Date.now() + 1, city: "", content: "현재 위치 날씨" },
//       {
//         id: Date.now() + 2,
//         city: "",
//         content: "빈 슬라이드 (추가할 슬라이드 2)",
//       },
//     ]; // 로컬 스토리지에서 저장된 슬라이드가 없으면 기본 슬라이드로 초기화
//     setSlides(savedSlides);

//     // localStorage에서 위치 정보 가져오기
//     const savedLocation = JSON.parse(localStorage.getItem("currentLocation"));
//     if (savedLocation) {
//       setCurrentLocation(savedLocation);
//     } else {
//       // 현재 위치 가져오기
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const location = { latitude, longitude };
//           setCurrentLocation(location);
//           localStorage.setItem("currentLocation", JSON.stringify(location)); // 위치를 로컬 스토리지에 저장
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//         }
//       );
//     }
//   }, []);

//   // 2. 현재 위치 날씨 데이터 가져오기
//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // 환경 변수에서 API 키 가져오기
//       if (currentLocation) {
//         try {
//           const response = await axios.get(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${API_KEY}&units=metric`
//           );
//           setWeatherData(response.data);
//           // 첫 번째 슬라이드에 현재 위치 도시 이름 업데이트
//           setSlides((prevSlides) => {
//             const updatedSlides = [...prevSlides];
//             updatedSlides[0] = {
//               ...updatedSlides[0],
//               city: response.data.name,
//               content: `${response.data.name} 날씨`,
//             };
//             localStorage.setItem("slides", JSON.stringify(updatedSlides)); // 슬라이드 업데이트 시 로컬 스토리지에 저장
//             return updatedSlides;
//           });
//         } catch (error) {
//           console.error("Error fetching weather data:", error);
//         }
//       }
//     };

//     fetchWeatherData();
//   }, [currentLocation]);

//   // // 슬라이드 추가 함수
//   // const addSlide = () => {
//   //   if (!newCity.trim()) return; // 빈값처리
//   //   const newSlide = {
//   //     id: `${Date.now()}-${Math.random()}`, // 고유한 ID 생성
//   //     city: newCity,
//   //     content: `${newCity} 날씨`,
//   //   };
//   //   const updatedSlides = [...slides, newSlide]; // 새 슬라이드 추가
//   //   localStorage.setItem("slides", JSON.stringify(updatedSlides)); // 로컬스토리지 저장
//   //   setSlides(updatedSlides); // 새 슬라이드 추가
//   //   setNewCity(""); // 입력 필드 초기화
//   //   setShowModal(false); // 모달창 닫기
//   // };

//   // 슬라이드 추가 함수, 실제 async를 이용해서 가져오기
//   const addSlide = async () => {
//     if (!newSlide.trim()) return;
//     const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

//     try {
//       // 입력된 도시명을 기반으로, 날씨 정보 가져오기
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${API_KEY}&units=metric`
//       );
//       const newSlide = {
//         id: `${Date.now()}-${Math.random()}`, // 고유한 아이디 생성
//         city: newCity,
//         content: `${response.data.name} 날씨: ${response.data.main.temp}°C, ${response.data.weather[0].description}`,
//       };

//       const updatedSlides = [...slides, newSlide];
//       setSlides(updatedSlides);
//       localStorage.setItem("slides", JSON.stringify(updatedSlides));
//       setNewCity(""); // 입력 필드 초기화
//       setShowModal(false); // 모달창 닫기
//     } catch (error) {
//       console.error("Error fetching weather data for the city:", error);
//     }
//   };

//   // 슬라이드 삭제 함수
//   const deleteSlide = (id) => {
//     const updatedSlides = slides.filter((slide) => slide.id !== id);
//     setSlides(updatedSlides); // 슬라이드 삭제
//     localStorage.setItem("slides", JSON.stringify(updatedSlides)); // 삭제 후에도 로컬 스토리지 업데이트
//   };

//   // 슬라이드 이동 버튼
//   const goToNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const goToPreviousSlide = () => {
//     setCurrentSlide(
//       (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
//     );
//   };

//   return (
//     <div className="slider-container">
//       <div
//         className="slider"
//         style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={slide.id} className="slide">
//             <h1>{slide.content}</h1>
//             {/* 첫 번째 슬라이드일 경우 현재 위치의 날씨를 표시 */}
//             {index === 0 && weatherData ? (
//               <div>
//                 <h2>{weatherData.name}</h2>
//                 <p>온도:{weatherData.main.temp}°C</p>
//                 <p>날씨: {weatherData.weather[0].description}</p>
//               </div>
//             ) : null}
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./reset.css";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const [weatherData, setWeatherData] = useState(null); // 날씨 데이터 상태
  const [currentLocation, setCurrentLocation] = useState(null); // 현재 위치 정보 상태
  const [slides, setSlides] = useState([
    {
      id: `${Date.now()}-${Math.random()}`,
      city: "",
      content: "현재 위치 날씨",
    }, // 고유한 ID 생성
    {
      id: `${Date.now()}-${Math.random()}`,
      city: "",
      content: "빈 슬라이드 (추가할 슬라이드 2)",
    }, // 고유한 ID 생성
  ]);
  const [showModal, setShowModal] = useState(false); // 모달창 상태
  const [newCity, setNewCity] = useState(""); // 새롭게 추가할 도시 이름
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // 1. 로컬 스토리지에서 위치 정보 불러오기
  useEffect(() => {
    const savedSlides = JSON.parse(localStorage.getItem("slides")) || [
      {
        id: `${Date.now()}-${Math.random()}`,
        city: "",
        content: "현재 위치 날씨",
      }, // 고유한 ID 유지
      {
        id: `${Date.now()}-${Math.random()}`,
        city: "",
        content: "빈 슬라이드 (추가할 슬라이드 2)",
      },
    ];
    setSlides(savedSlides);

    const savedLocation = JSON.parse(localStorage.getItem("currentLocation"));
    if (savedLocation) {
      setCurrentLocation(savedLocation);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = { latitude, longitude };
          setCurrentLocation(location);
          localStorage.setItem("currentLocation", JSON.stringify(location));
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  }, []);

  // 2. 현재 위치 날씨 데이터 가져오기
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

  // Geocoding API로 도시 좌표 가져오기
  const fetchCityCoordinates = async (city) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      if (response.data.length === 0) {
        throw new Error("도시를 찾을 수 없습니다.");
      }
      const { lat, lon, name } = response.data[0];
      return { lat, lon, name };
    } catch (error) {
      throw new Error("도시를 찾을 수 없습니다.");
    }
  };

  // 새로운 슬라이드 추가 함수
  const addSlide = async () => {
    if (!newCity.trim()) return;

    try {
      // Geocoding API로 도시의 좌표 가져오기
      const { lat, lon, name } = await fetchCityCoordinates(newCity);

      // 가져온 좌표로 날씨 정보 가져오기
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
      );

      const newSlide = {
        id: `${Date.now()}-${Math.random()}`, // 고유한 ID 생성
        city: name,
        content: `${name} 날씨: ${response.data.main.temp}°C, ${response.data.weather[0].description}`,
      };

      const updatedSlides = [...slides, newSlide];
      setSlides(updatedSlides);
      localStorage.setItem("slides", JSON.stringify(updatedSlides));

      setNewCity(""); // 입력 필드 초기화
      setShowModal(false); // 모달창 닫기
    } catch (error) {
      setErrorMessage("해당 도시를 찾을 수 없습니다.");
      console.error("Error fetching weather data for the city:", error);
    }
  };

  // 슬라이드 삭제 함수
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

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="slide">
            <h1>{slide.content}</h1>
            {index === 0 && weatherData ? (
              <div>
                <h2>{weatherData.name}</h2>
                <p>온도: {weatherData.main.temp}°C</p>
                <p>날씨: {weatherData.weather[0].description}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPreviousSlide}>
        이전
      </button>
      <button className="next" onClick={goToNextSlide}>
        다음
      </button>

      {/* 슬라이드 추가 버튼 */}
      <button onClick={() => setShowModal(true)} className="slide__add-btn">
        슬라이드 추가
      </button>

      {/* 모달창 */}
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
        </div>
      )}
    </div>
  );
};

export default App;
