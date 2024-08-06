const userId = document.querySelector("#userId");
console.log(userId);

userId.addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});

userId.addEventListener("blur", function () {
  this.style.backgroundColor = "white";
});
