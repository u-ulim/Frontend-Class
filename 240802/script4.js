const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => {
  if (!document.body.classList.contains("dark")) {
    button.innerText = "라이트모드로 바꾸기";
    document.body.classList.add("dark");
  } else {
    button.innerText = "다크모드로 바꾸기";
    document.body.classList.remove("dark");
  }
});
