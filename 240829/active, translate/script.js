const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dy = Math.floor(Math.random() * 4) + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
      this.dx = -this.dx;

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
      this.dy = -this.dy;

    this.draw();
  }
}

// const circleOne = new Circle(100, 100, 50, "red");
// console.log(circleOne);

// 객체형태 1개 => 원 1개 생성
// 객체형태 20개 => 원 20개

// const circleTwo = new Circle(200, 200, 20, "blue");
// console.log(circleOne);
// circleOne.draw();
// circleTwo.draw();

const objs = [];

for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(
  ${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)})`;

  objs.push(new Circle(x, y, radius, color));
}

console.log(objs);

// objs.forEach((obj, index) => {
//   objs[index].draw();
// });

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate();
  }
  requestAnimationFrame(update);
};

update();

// 정리.

// 변수, 원시타입 // 참조타입
// 자료형, 형변환
// 연산자, 산술 / 복합대입 / 증감
// 조건문, if / else if / else / 삼항조건
// 반복문, for / for of / for in / forEach / while / do while
// 함수, 화살표 함수 / 콜백함수 / this
// DOM, querySelect, All, 유사배열
// EVENT, 이벤트 핸들러 / 이벤트 버블링
// DOM 응용,  form && event
// 객체,  온점 / 대괄호 /중첩객체
// Class,  생성자 함수 / 상속 / 프로토타입 / 인스턴스
// 문자열, 메서드 함수 
// 배열, 인덱스 / lenght / 메서드 (map, forEach, find, 전개연산자(...), pop, filter, reduce, 등등)
// 정규표현식, 패턴과 플래그
// 데이터통신,  서버 asnyc, await, 비동기, 동기처리 XHML / json
// Localstorage, session, setItem, getItem / to do list 
// Geolocation, 카카오맵, 공공데이터포털, 
// Canvas, 동적인 애니메이션 컨트롤
