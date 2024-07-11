/* MAIN SLIDE */
// 전역변수
let i = 0;
let MainJsonData = []; // JSON DATA_SLIDE

// 배열
const slideImgs = ["slide1.png", "slide2.png", "slide3.png"];

// 슬라이드 버튼
const slideArrows = document.querySelectorAll(
  ".main__slide__pagination__arrows .fa-solid"
);

// 슬라이드 페이저
const slidePagers = document.querySelectorAll(
  ".main__slide__pagination__num > span"
);
slidePagers[0].classList.add("active");

// 슬라이드 이미지
const slideImg = document.querySelector(".main__slide__img-box");

slideImg.style.backgroundImage = `url(./assets/slide/${slideImgs[i]})`;

// DATA 받아와서 이미지 및 페이저, TEXT 변경 시켜주기
const mainTitle = document.querySelector(".main__slide__text-title");

const mainTextDesc = document.querySelector(".main__slide__text-desc");

fetch("./scripts/data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    MainJsonData = jsonData.slide;
    mainTitle.innerText = MainJsonData[0].title;
    mainTextDesc.innerText = MainJsonData[0].textDesc;
  });

// 이미지 및 페이저 값, TEXT 변경 시켜주는 실행 함수
const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });

  slideImg.style.backgroundImage = `url(./assets/slide/${slideImgs[i]})`;
  slidePagers[i].classList.add("active");

  mainTitle.innerText = MainJsonData[i].title;
  mainTextDesc.innerText = MainJsonData[i].textDesc;
};

// ARROW 클릭 시 변경요청 함수
slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "slide-left-arrow") {
      i = (i - 1 + slideImgs.length) % slideImgs.length;
    } else if (e.target.id === "slide-right-arrow") {
      i = (i + 1) % slideImgs.length;
    }

    updateSlide(i);
  });
});

// 슬라이드 페이저 클릭 시, 슬라이드 이미지 변경 함수
slidePagers.forEach((pager, index) => {
  {
    pager.addEventListener("click", () => {
      i = index;
      updateSlide(i);
    });
  }
});

// a 태그 클릭 시 부드럽게 이동
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
