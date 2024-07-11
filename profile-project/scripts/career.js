let careerIndex = 0;
let CareerJsonData = [];

const careerFooterImg = document.querySelector(".career__footer__img");

// CAREER DATA 받아오기
fetch("./scripts/data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    CareerJsonData = jsonData.career;
    careerFooterImg.style.backgroundImage = `url(./assets/carrer/${CareerJsonData[0].img})`;

    startSlideShow();
  });

const careerUpdateSlide = (careerIndex) => {
  careerFooterImg.style.backgroundImage = `url(./assets/carrer/${CareerJsonData[careerIndex].img})`;
};
// AUTO SLIDE
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    careerIndex = (careerIndex + 1) % CareerJsonData.length;
    careerUpdateSlide(careerIndex);
  }, 4000);
};
