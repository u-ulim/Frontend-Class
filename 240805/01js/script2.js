// touch Event

const hashContent = document.querySelector(".hashcontent");

// 최초 터치 및 마우스 다운지점
let startX = 0;

//현재 이동 중인 지점
let nowX = 0;

// 터치 종료 지점
let endX = 0;

// 두번 째 터치 지점
let listX = 0;
// clientX: 사용자가 현재 보고 있는 device 매체의 너비를 의미
const getClientX = (e) => {
  // const isTouches = e.touches ? true : false;
  // return isTouches ? e.touches[0].clientX : e.clientX;
  return e.touches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  console.log(window.getComputedStyle(hashContent).transform);
};



const setTranslateX = (x) => {
  hashContent.style.transform = `translate(${x})px`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
