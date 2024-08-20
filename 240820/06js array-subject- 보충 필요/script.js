// id : 123  name: 곰
// id : 1111 // name  : 사자
// id : 555 // name  : 호랑이
// id : 2222 // name  : 어린이

const search = document.querySelector("form");

const arr = {
  items: [
    {
      id: 123,
      name: "곰",
    },
    {
      id: 1111,
      name: "사자",
    },
    {
      id: 555,
      name: "호랑이",
    },
    {
      id: 2222,
      name: "어린이",
    },
  ],
};

search.addEventListener("submit", (e) => {
  let inputValue = document.querySelector(".input-wrapper > input").value;
  console.log(inputValue);
  e.preventDefault();
  const foundItem = arr.items.find((item) => item.id === parseInt(inputValue));

  if (foundItem) {
    console.log(`${foundItem.name}`);
  } else {
    console.log("일치하는 값이 없습니다");
  }
});
