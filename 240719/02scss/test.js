const icons = document.querySelectorAll(".icons li");

console.log(icons);

icons.forEach((item) => {
  item.addEventListener("click", () => {
    icons.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
  });
});


