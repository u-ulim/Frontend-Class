window.onload = function () {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);
  document.body.style.backgroundImage = `url(./images/bg-${randomNumber}.jpg)`;
};
