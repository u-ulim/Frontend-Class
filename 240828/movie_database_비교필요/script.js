import api from "./env.js";

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api.API_KEY}&language=ko&page=1`;

// 기본 값으로 빈 객체를 전달하여 오류 방지

const movieDetail = (e) => {
  const { id } = e.target.parentElement;

  const detailURL = `https://www.themoviedb.org/movie/${id}`;

  console.log(detailURL);
  window.open(detailURL, "_blank");
};

const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
} = {}) => {
  // 기본값을 빈 객체로 설정하여 undefined 방지
  if (!id) {
    console.error("유효하지 않은 데이터입니다.", id);
    return;
  }

  const parent = document.querySelector(".contents");
  const movie = document.createElement("div");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const info = document.createElement("div");
  const h3 = document.createElement("h3");
  const date = document.createElement("div");
  const rate = document.createElement("div");

  detail.className = "detail";
  movie.className = "movie";
  info.className = "info";
  date.className = "date";
  rate.className = "rate";

  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${original_title} (${title})`;
  date.innerText = release_date;
  rate.innerText = `★★★${vote_average}`;

  movie.id = id;
  info.append(date, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  poster.addEventListener("click", movieDetail);
};

// createBlock()를 잘못된 호출 방지
// createBlock(); 이 부분은 필요 없습니다.

fetch(URL)
  .then((response) => response.json())
  .then(({ results }) => {
    results.forEach((movie) => {
      createBlock(movie);
      console.log(movie);
    });
  })
  .catch((error) => console.error("API 요청 실패:", error));
