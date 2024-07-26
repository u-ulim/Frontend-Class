const productInfo =
  "https://my-json-server.typicode.com/yerixx/Aliexpress_Fake/db";
// 메서드 체이닝 기법
// error message
fetch(productInfo)
  // 데이터를 찾아오게 된다면 then 실행
  // id값이 없는 데이터는 의미가 없음
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      // 함수 실행문 아니기 때문에 소괄호로 감싸야함
      data: data.data.map((item) => ({
        //전개연산자
        ...item,
        id: idCounter++,
      })),
    };

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const name = params.get("name");

    // 특정값만 찾아서 변환해줌
    const product = products.data.find(
      (product) => product.category === category && product.name === name
    );

    console.log(product);

    const price = new Intl.NumberFormat("ko-kr", {
      currency: "KRW",
    }).format(product.price);

    if (product) {
      const productDetailDiv = document.querySelector("#prduct-detail");

      productDetailDiv.innerHTML = `<div class="product-category">
      <h3>현재 카테고리 > ${product.category} > ${product.name}</h3>
      </div>
      <div class ="product-img">
        <img src="${product.img}" alt=" ${product.name}"/>
      </div>
      <div class ="product-info">
       <h1>${product.name}</h1>
       <p>Category : ${product.category}</p>
       <p>Price : ${price}원</p>
      </div>
      <button>장바구니 이동</button>
      `;
    } else {
      const productDetailDiv = document.querySelector("#prduct-detail");

      productDetailDiv.innerText = "존재하지 않는 상품입니다!";
    }
  })
  .catch((e) => {
    console.log(error);
  });
