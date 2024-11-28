const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");

const buttonAll = document.querySelectorAll("a");

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;

    cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  };

  window.requestAnimationFrame(loop);
});

buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // margin 사용
    circle.style.transform = "scale(0.3) translate(-150%, -150%)";
    // circle.style.transform = "translate(-100%, -100%)";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1) translate(0%, 0%)";
  });
});
