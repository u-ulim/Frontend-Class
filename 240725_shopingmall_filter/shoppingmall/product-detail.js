const productInfo =
  "https://my-json-server.typicode.com/u-ulim/temu-products/db";

//메서드 체이닝 기법이라고 함, 함수를 사슬처럼 여러 개 묶어놓기

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.products.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };
    console.log(data);
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const name = params.get("title");

    console.log(category, name);

    const product = products.data.find(
      (product) => product.category === category && product.title === name
    );

    console.log(product.category);

    // if (product) {
    //   const price = new Intl.NumberFormat("ko-kr", {
    //     currency: "KRW",
    //   }).format(product.price);
    //   const productDetailDiv = document.querySelector("#product-detail");
    //   // <h3>현재카테고리${products.data[0].category}</h3>
    //   productDetailDiv.innerHTML = `
    // <div class="product-category">
    //   <h3>현재카테고리${product.category} > ${product.name}</h3>
    // </div>
    // <div class="product">
    //   <img src="${product.img}" alt="${product.name}" />
    // </div>
    // <div class="product-info">
    //   <h1>${product.name}</h1>
    //   <p>Category: ${product.category}</p>
    //   <p>Price: ${price}원</p>
    // </div>
    // <button>장바구니 이동</button>
    // `;
    // } else {
    //   const productDetailDiv = document.querySelector("#product-detail");
    //   productDetailDiv.innerText = "존재하지 않는 상품입니다!";
    // }
  })
  .catch((error) => {
    console.log(error);
  });
