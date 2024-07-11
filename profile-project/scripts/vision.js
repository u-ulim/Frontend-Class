// EXCHANGE
const visionExchangeBtn = document.querySelector("#vision__item__exchange-btn");
const exchangeModalBox = document.querySelector(
  "#vision__item__exchange-modal-box"
);
const visionCloseExchange = document.querySelector("#close-exchange");

visionExchangeBtn.addEventListener("click", () => {
  exchangeModalBox.classList.add("active");
});
visionCloseExchange.addEventListener("click", () => {
  exchangeModalBox.classList.remove("active");
});

// COMUNI

const visionComuniBtn = document.querySelector("#vision__item__comuni-btn");
const comuniModalBox = document.querySelector(
  "#vision__item__comuni-modal-box"
);
const visionCloseComuni = document.querySelector("#close-comuni");

visionComuniBtn.addEventListener("click", () => {
  comuniModalBox.classList.add("active");
});
visionCloseComuni.addEventListener("click", () => {
  comuniModalBox.classList.remove("active");
});

// PROPOSE
const visionProposeBtn = document.querySelector("#vision__item__propose-btn");
const visionClosePropose = document.querySelector("#close-propose");
const proposeModalBox = document.querySelector(
  "#vision__item__propose-modal-box"
);

visionProposeBtn.addEventListener("click", () => {
  proposeModalBox.classList.add("active");
});
visionClosePropose.addEventListener("click", () => {
  proposeModalBox.classList.remove("active");
});
