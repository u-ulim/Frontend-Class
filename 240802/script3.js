const main = window.document.querySelector("main");
// const profile = main.querySelector("#profile");
const profile = document.getElementById("profile");
const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
const user = document.querySelectorAll(".user");
// console.log(user[user.length - 1]);
// console.log(profile);
// getElementById => 메모리의 효율성 극대화
// DOM > ID
// 객체 속성을 반드시 document로 지정하고 가야한다.

// const img = document.getElementsByClassName("image");
// console.log(img);
// const tagh1 = document.getElementsByTagName("h1");
// console.log(tagh1);

// querySelector => 전역요소의 모든 node
// => 누구..? 세 개중에 누구인데?
// user.addEventListner("click", () => {
//   console.log("click");
// })
// 반복문의 중요성
// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });

// querySelectorAll => 유사배열 NodeList
// 99% 배열이 가지고 있는 속성! 유사배열은 배열과 다른 1%
// 유사 배열, 차이 찾아보기

const desc = document.querySelector("#desc");
const iu = desc.querySelectorAll(".user")[0];

// console.log(desc.innerHTML);

// innerText 특정 노드 안에 담긴 text요소만 찾아옴
// => HTML 안에 들어가있는 텍스트를 추출해서 텍스트만 출력

// console.log(desc.innerHTML);
// console.log(desc.innerText);
// console.log(desc.textContent);

const title = document.querySelector("#title");

// 객체  함수가 객체 뒤에 붙어있는 것임
title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "black";
  this.style.color = "#fff";
  this.style.borderRadius = "5px";
});
// this = function, 화살표 함수의 차이

const pfimg = document.querySelector("#profile img");

// 문서를 객체화 시켰기 때문에, src라고 하는 속성도 .으로 가져올 수가 있다.
// console.log(pfimg.src);

pfimg.addEventListener("click", function () {
  this.src = "./images/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");

console.log(firstP);
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>태연</b>";
});

const secondP = document.querySelector("#desc > p:nth-child(2");

secondP.addEventListener("click", function () {
  // this.classList.add("active");
  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
  this.classList.toggle("active");
});
