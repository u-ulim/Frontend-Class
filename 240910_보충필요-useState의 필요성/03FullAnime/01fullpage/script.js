const sec2Title = document.querySelector("#sec2 h1");
const sec2Slider = document.querySelector("#sec2 .slider_wrap");

const sec0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 4000,
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });
};

const sec1 = () => {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });

  tl.add({
    targets: ".g01",
    height: "80%",
  })
    .add({
      targets: ".g02",
      height: "70%",
    })
    .add({
      targets: ".g03",
      height: "90%",
    })
    .add({
      targets: ".g04",
      height: "100%",
    });
};

const sec1_reset = () => {
  anime({
    targets: ".gage_in",
    height: "0%",
  });
};

const sec2 = () => {
  //   sec2Title.style.cssText = `
  //   opacity: 1;
  //   transform: translateX(50px);
  //   `;
  //   sec2Slider.style.cssText = `
  //   opacity: 1;
  //   transform: translateX(-50px);
  // `;
};

// const sec2_reset = () => {
//   sec2Title.style.cssText = `
//   opacity: 0;
//   transform: translateX(-50px);
// `;
//   sec2Slider.style.cssText = `
// opacity: 0;
// transform: translateX(-50px);
// `;
// };

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
    if (new_elem.index === 0) sec0();
    if (new_elem.index === 1) sec1();
    if (old_elem.index === 1) sec1_reset();
    if (new_elem.index === 2) {
      // console.log(new_elem.index, direction);
      sec2();
    }
    // if (old_elem.index === 2) {
    //   sec2_reset();
    //   console.log("section2 Goobye");
    // }
  },
});

// nav event
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav_active");
});
