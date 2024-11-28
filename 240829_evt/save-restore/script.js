const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// save() => 저장기능
// restore()

// 01. save & restore를 활용한 작업 마치 => relative, static
// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// // 여기서부터 저장이된다.
// ctx.save();

// canvas의 전체 좌표를 이동하게 된 것
// ctx.translate(150, 150);
// ctx.fillStyle = "#222";
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);
// // restore가 들어오게 되면,
// ctx.restore();

// // 다시 새로 시작하게 된다.
// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// 02. moveTo를 활용한 작업 / 둘다 결과론적으로는 똑같다. => 마치 absolute
ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);

ctx.moveTo(150, 150);

ctx.fillStyle = "#222";
ctx.fillRect(160, 160, 100, 100);

// save와 restore는 이미 translate가 되어있는 상태를 중심으로 되어있지만 moveto는 좌표가 움직이지 않기 때문에 근본적으로 다르다.
ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 80, 20);
