// scroll event
window.addEventListener("scroll", (e) => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const logo = document.querySelector("#logo");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const trigger = document.querySelectorAll(".trigger span");
  // nodeList 이터러블 객체
  // ! 반복문과 배열 잘쓰기

  if (window.scrollY > 60) {
    header.classList.add("active");
    nav.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    logo.classList.add("active");
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    logo.classList.remove("active");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

//toggle event
// 01. 우측 상단 토글 버튼을 클릭한다.
// 02. 토글 버튼을 클릭한다면, X모양으로 바뀌게 한다.
// 03. X모양으로 바뀌어 질 수 있도록 스타일 정의
// 04. 스타일 정의 시, active 가상클래스 부여
// 05. 가상클래스는 JS를 활용해서 이벤트로 적용
const toggleBtn = document.querySelector(".trigger");

toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
});
