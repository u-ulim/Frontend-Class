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

// searchbar trigger
// 01. 사용자가 검색 버튼을 클릭한다.
// 컴퓨터는 DOM을 활용해서 검색 버튼을 인지할 수 있다.
// 검색버튼이 클릭 되었는지에 대한 여부를 event 처리를 통해 실행

// 02. 검색버튼을 1번 클릭하면 오른쪽에 있던 .search_bar가  출력된다.
// 미리 사전에 css를 통해서 정의한 가상클래스를 호출한다.

// 03. 검색버튼을 2번 클릭하면 왼쪽 현 위치에 있던 .search bar가 다시 오른쪽으로
// 호출된 가상클래스를 찾아와서 다시 제거한다.

// 04. 위 3~4번이 계속 반복될 수 있도록 한다.
// toggle()을 활용해서 실행한다.

const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
// 두 개의 복수 클래스, 둘 다 상관없으니까 같이 주자 이럴 때는 반복문
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-xmark");

console.log(closeBtn);

searchBar.forEach((item) => {
  //item이라고 하는 매개변수를 참조변수라고 한다.
  item.addEventListener("click", () => {
    console.log("click");
    searchResult.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  console.log("close");
  searchResult.classList.remove("active");
});

// 화살표 클릭 및 이미지 변경요청 함수
// main slide
const slideContainerArrow = document.querySelector(".slide_container_arrow"); // 슬라이드 영역

const slideArrows = document.querySelectorAll(".slide_container_btn"); //슬라이드 버튼

const slidePagers = document.querySelectorAll(".slide_pager span"); // paginations

const slideImg = document.querySelector(".slide_img"); // 슬라이드 이미지

//배열
const pics = ["slide1.png", "slide2.png", "slide3.png"];

let i = 0;
let slideInterval;
let isTransitioning = false;

slideImg.style.backgroundImage = `url(https://ecimg.cafe24img.com/pg1108b08519033017/hiissoop/Chef/${pics[i]})`;
slidePagers[0].classList.add("active");

// 실제 이미지 및 페이저 값을 변경시켜주는 함수
const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg.style.backgroundImage = `url(https://ecimg.cafe24img.com/pg1108b08519033017/hiissoop/Chef/${pics[i]})`;
  slidePagers[i].classList.add("active");
};
//
// 자동으로 슬라이드 이미지가 변경되도록 해주는 함수
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
    updateSlide(i);
  }, 4000);
};

// 자동슬라이드 기능을 정지시켜주는 함수
const stopSlideShow = () => {
  clearInterval(slideInterval);
};

// 자동 슬라이드 재시작을 실행시켜주는 함수
const resetSlideshow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    //이벤트 객체를 가져올 수 있음
    if (isTransitioning) return;
    isTransitioning = true;

    stopSlideShow();
    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }

    updateSlide(i);

    setTimeout(() => {
      isTransitioning = false;
      startSlideShow();
    }, 500);
  });
});

// 슬라이드 페이저 클릭 시, 슬라이드 이미지 변경 함수
slidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    stopSlideShow();
    i = index;
    updateSlide(i);
    setTimenout(startSlideShow, 500);
  });
});

startSlideShow();

slideContainerArrow.addEventListener("mouseover", stopSlideShow);
slideContainerArrow.addEventListener("mouseout", resetSlideshow);
