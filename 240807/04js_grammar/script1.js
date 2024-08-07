const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector(".orderInfo");

orderButton.addEventListener("click", () => {
  console.log("hi");
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");

  srcNode.value =
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/409b0671-564e-4d7d-bbbd-54e011743e16/%EB%B2%A0%EC%9D%B4%ED%8D%BC%ED%94%8C%EB%9D%BC%EC%9D%B4-3-%EC%97%AC%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-hYnF3A6t.png";

  newImg.setAttributeNode(srcNode);
  
  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});
