const canvas = document.querySelector("canvas");

canvas.width = innerWidth;

canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// 선의 굵기 && 선의 끝부분 처리!!

// linewWidth = "" => 선의 굵기를 정의
// lineCap = butt("기본값") // orund // square

// const lineCap = ["butt", "round", "square"];

// for (let i = 0; i < lineCap.length; i++) {
//   ctx.beginPath();
//   // moveTo의 역할 그림을 그렸고, 그림 영역을 종료시킨다. 종료시킨다는 것은 손가락을 뗀다는 것. 좌표값을 새로 시작, 종료가 안됨, 새로운 곳에서 그리기 위해 종료를 시킨다는 것. 새로운 좌표를 정의한다는 것.
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.lineWidth = 15;
//   ctx.lineCap = lineCap[i];
//   ctx.stroke();
// }

// 선이 교초하는 지점에서의 효과처리
// bevel // miter / round

const lineJoin = ["bevel", "miter", "round"];
for (let i = 0; i < lineJoin.length; i++) {
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.stroke();
}
