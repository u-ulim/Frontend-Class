const character = document.querySelector(".character");

let degree = 0;

const loop = () => {
  const rotaion = (degree * Math.PI) / 180;
  console.log(rotaion);
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotaion);
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotaion);

  //cos => 빗변분의 밑변
  //sin => 높이

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;
  //  애니메이션, => 재귀함수
  requestAnimationFrame(loop);
  // console.log(rotaion);
};

loop();
