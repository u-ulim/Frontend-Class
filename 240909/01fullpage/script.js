console.log("hi");

const sec2Title = document.querySelector("#sec2 h1");
const sec2Slider = document.querySelector("#sec2 .slider_wrap");
console.log(sec2Title, sec2Slider);

const sec2 = () => {
  sec2Title.style.cssText = `
  opacity: 1;
  transform: translateX(50px);
  `;
  sec2Slider.style.cssText = `
  opacity: 1;
  transform: translateX(-50px);
`;
};

const sec2_reset = () => {
  sec2Title.style.cssText = `
  opacity: 0;
  transform: translateX(-50px);
`;
  sec2Slider.style.cssText = `
opacity: 0;
transform: translateX(-50px);
`;
};

// new fullpage("#fullpage"),
//   {
//     //option here
//     autoScrolling: true,
//     scrollHorizontally: true,
//     navigation: true,
//   };

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 2) {
      // console.log(new_elem.index, direction);
      sec2();
      console.log("section2 Hello!");
    }

    if (old_elem.index === 2) {
      sec2_reset();
      console.log("section2 Goobye");
    }
  },
});

// nav event
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav_active");
});
