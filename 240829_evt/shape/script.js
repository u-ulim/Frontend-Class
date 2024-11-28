const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = "#ccc";
// ctx.fillRect(150, 150, 100, 100);

// // 각도 canvas의 모든 각도는 라디언

// ctx.translate(150, 150);
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);
// // 마치 transform 처럼 aboslute 이래서 translate가 필요하다.
// // 그리고 순서도 매우 중요하다!

ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);

ctx.save();
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);
ctx.restore();

ctx.strokeRect(200, 50, 100, 50);
