const overout = document.querySelectorAll(".overout");

let i = 0;

console.log(overout);

overout.forEach((item, index) => {
  if (index === 0) {
    item.addEventListener("mouseover", function () {
      this.querySelector("p:first-of-type").innerText = "mouseover";
      this.querySelector("P:last-of-type").innerText = i++;
    });
    item.addEventListener("mouseout", function () {
      this.querySelector("p:first-of-type").innerText = "mouseout";
      this.querySelector("P:last-of-type").innerText = i++;
    });
  }
});
