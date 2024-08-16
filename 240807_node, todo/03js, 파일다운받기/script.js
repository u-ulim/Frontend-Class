const menus = document.querySelectorAll(".main > ul > li");
const imgFull = document.querySelector(".img-full");

console.log(menus);

menus.forEach((menu, index) => {
  menu.addEventListener("mouseenter", () => {
    let imageURL = "";

    switch (index) {
      case 0:
        imageURL = "./img/portrait-01.jpg";
        break;
      case 1:
        imageURL = "./img/portrait-02.jpg";
        break;
      case 2:
        imageURL = "./img/portrait-03.jpg";
        break;
      case 3:
        imageURL = "./img/portrait-04.jpg";
        break;
    }
    imgFull.innerHTML = `<img src="${imageURL}"/>`;
  });
});
