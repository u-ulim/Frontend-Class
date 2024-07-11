// SCROLL EVENT

/* M TRIGGER EVENT */
const toggleBtn = document.querySelector(".trigger");

toggleBtn.addEventListener("click", function () {
  const mobileHeaderGnb = document.querySelector(".mobile-header__gnb");
  mobileHeaderGnb.classList.toggle("open");
  this.classList.toggle("active");
});
