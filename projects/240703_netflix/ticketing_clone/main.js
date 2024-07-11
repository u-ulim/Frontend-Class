// Header
const gnbLi = document.querySelectorAll(".header-nav-leftBox-menu > li");

gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

// Card
const cardItems = document.querySelectorAll(".cardsBox-card");

console.log(cardItems);

cardItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.1)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
  });
});

// Card Background Image Change

const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];

const bgImg = document.querySelector("#main");

bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./assets/${bgImgs[0]})`;

const contentTit = document.querySelector(".main-slide-text-title");
const contentDesc = document.querySelector(".main-slide-text-descr");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    let currentIndex = 0;
    const { data } = jsonData;
    const [firstData, ...otherData] = data;

    contentTit.innerText = firstData.title;
    contentDesc.innerText = firstData.description;
    const updateContent = (index) => {
      const { title, description } = data[index];
      bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./assets/${bgImgs[index]})`;
      contentTit.innerText = title;
      contentDesc.innerText = description;
    };

    cardItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = index + 1;

        if (currentIndex >= data.length) {
          currentIndex = 0; // Reset to the first item if it exceeds the array length
        }

        updateContent(currentIndex);
      });
    });
  });
