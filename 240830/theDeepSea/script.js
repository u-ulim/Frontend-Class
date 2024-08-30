const progressbar = document.querySelector(".bar");

const depthWrap = document.querySelector(".depthWrap span");

const submarine = document.querySelector(".submarine");

const octopus = document.querySelector(".octopus");

const percent = (scrollnum, documentheight) => {
  return ((scrollnum / documentheight) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = `${percent(scrollNum, documentHeight)}`;
  console.log(per);
  progressbar.style.width = `${per}%`;
  depthWrap.innerText = scrollNum;

  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 2}%)`;
  console.log(octopus);
});
