// const saleBtn = document.querySelector(".sale__inputs__btn");

// const calculate = () => {
//   const originalPrice = document.querySelector(
//     ".sale__inputs__original-value"
//   ).value;

//   const sales = document.querySelector(".sale__inputs-value").value;

//   const desc = document.querySelector(".desc");

//   const salesPricePercent = (Number(sales) / Number(originalPrice)) * 10;

//   console.log(salesPricePercent);

//   const salesPrice = originalPrice * salesPricePercent;
//   console.log(salesPrice);

//   const lastPrice = originalPrice - salesPrice;

//   desc.innerHTML = `상품의 원래 가격은 ${originalPrice}이고  할인율은 ${sales}입니다. ${salesPrice}만큼 할인 되었고, 최종가격은 ${lastPrice}입니다`;
// };

// saleBtn.addEventListener("click", calculate);

// 폼 요소(*iput태그) 입력될 값 쩔대 전역요소로 놓지말기

const button = document.querySelector("input[type='button']");

console.log(button);

const showSales = () => {
  const price = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  const savedPrice = price * (rate / 100);
  const resultPrice = price - savedPrice;
  document.querySelector(
    ".bottomInfo p"
  ).innerText = `상품의 원래  가격은 ${price}원 이고, 할인율은 ${rate}%입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수  있습니다.`;
};
button.addEventListener("click", showSales);
