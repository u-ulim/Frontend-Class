// 01. 웹브라우저에게 클릭할 이벤트 대상을 알려준다.
// querySelector()
// addEventListener()

// 02. 클릭을 했을 때, css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다.
// classList
// add() || remove()
// button => 기본속성이 있음 // 방해요소 preventDefalut();

// 2_1. 가상클래스 = filledA & filledB

const femaleBtn = document.querySelector("#femalebtn");
const maleBtn = document.querySelector("#malebtn");

let a = true;

femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
