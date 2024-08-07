//JS 현 시점의 날짜 정보 데이터를 생성해주는 함수
// 년, 월, 일, 시, 분, 초

const today = new Date();
console.log(today.getHours());

const hrs = today.getHours();

const container = document.querySelector(".container");
const newImg = document.createElement("img");
container.appendChild(newImg);

// 삼항조건연산자

newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";
