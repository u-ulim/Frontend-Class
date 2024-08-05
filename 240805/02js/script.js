const btn = document.querySelector(".box-contents__right button");

const textContents = document.querySelector(".text-contents");
console.log(btn);

btn.addEventListener("click", () => {
  textContents.classList.toggle("active");
});
