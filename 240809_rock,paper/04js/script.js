document.write(`<h1> 컴퓨터 가위 바위 보 맞추기 게임`);

const game = prompt("가위, 바위, 보 중 선택하세요", "가위");

let gameNum = "";

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못입력하셨네요");
    location.reload();
}

console.log(gameNum);

const com = Math.ceil(Math.random() * 3);
document.write(`<img src="./img/math_img_${com}.jpg"/>`);

if (gameNum === com) document.write(`컴퓨터와 같은 마음이군요`);
document.write(`아직 우린 서로 잘 모르네요.`);
