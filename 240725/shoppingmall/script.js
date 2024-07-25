// import products from "./products.js";

// console.log(products.data[0].img);

const productInfo = "./products.json";
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };

    // New

    // Remove Items
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // Making Items
    const createItem = (product) => {
      const ul = document.querySelector("ul");

      const li = document.createElement("li");

      const img = document.createElement("img");

      const attr = document.createAttribute("src");

      const div = document.createElement("div");

      const h3 = document.createElement("h3");

      const span = document.createElement("span");

      li.id = product.id;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);
      // 메서드 체이닝 기법
      // 프로토 타입 함수, 숫자나 통화 표기하는데, 어떤 나라를 기준으로 할래?

      h3.className = "name";
      h3.innerText = product.name;

      span.className = "pirce";
      span.innerText = price;

      attr.value = product.img;
      img.setAttributeNode(attr);
      ul.appendChild(li);
      div.append(h3, span);
      li.append(img, div);
    };

    // Importing Items
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.id - b.id;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    const newlisting = document.querySelector(".newlisting");
    newlisting.addEventListener("click", sortNew);

    //Ascending
    const asceButton = document.querySelector(".ascending");

    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };
    asceButton.addEventListener("click", sortAsce);

    //Descending
    const descButton = document.querySelector(".decending");

    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };
    descButton.addEventListener("click", sortDesc);

    // Search
    const searchBar = document.querySelector(".searchBar");
    console.log(searchBar);
    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase();
      if (keyword === "") {
        removeItems();
        importData();
        // 예외 조항 처리
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });
        removeItems();

        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    // select event
    const select = document.querySelector("select");
    console.log(select);
    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      console.log(selectedIndex, value);

      const filtered = products.data.filter((product) => {
        return product.category === value;
      });

      removeItems();
      filtered.forEach((product) => {
        createItem(product);
      });
    };
    select.addEventListener("change", selectCategory);
  })

  .catch((error) => {
    console.log(error);
  });

// 중복해서 쓸 필요가 없다, append를 쓰면,

// li.appendChild(img);
// li.appendChild(div);

// document.addEventListener('DOMContentLoaded', () => {
//   const icons = document.querySelectorAll('.icon');
//   console.log(icons); // 선택된 요소들을 콘솔에 출력

//   icons.forEach((item) => {
//       item.addEventListener("click", () => {
//           icons.forEach((li) => li.classList.remove("active"));
//           item.classList.add("active");
//       });
//   });
// });
