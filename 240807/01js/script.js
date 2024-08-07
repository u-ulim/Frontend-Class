// const btn = document.querySelector("aside > button");
// const aside = document.querySelector("aside");
// console.log(btn);

// btn.addEventListener("click", () => {
//   aside.classList.toggle("active");
// });

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const nav = document.querySelector("nav");
  this.classList.toggle("active");
  nav.classList.toggle("active");
});
