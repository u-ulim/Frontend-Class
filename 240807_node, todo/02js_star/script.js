const reviewStars = document.querySelectorAll(".review-stars li > i");

let reviewEmotionsText = document.querySelector(".review-emotions");

reviewStars.forEach((item, index) => {
  item.addEventListener("click", () => {
    reviewStars.forEach((star, i) => {
      if (i <= index) {
        star.classList.add("active");
        console.log(star, i);
      } else {
        star.classList.remove("active");
      }
    });

    let message = "";
    let imageURL = "";

    switch (index) {
      case 0:
        message = "별로";
        imageURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통";
        imageURL = "./img/star-lv2.png";

        break;
      case 2:
        message = "그저그럼";
        imageURL = "./img/star-lv3.png";

        break;
      case 3:
        message = "맘에든당";
        imageURL = "./img/star-lv4.png";

        break;
      case 4:
        message = "아주 죠아";
        imageURL = "./img/star-lv5.png";

        break;
    }
    reviewEmotionsText.innerHTML = `<img src="${imageURL}"> ${message}`;
  });
});
