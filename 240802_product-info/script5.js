// Form 요소 => form 태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현

// 요소.value

// const orderName = document.querySelector("#orderName");

// console.log(orderName);

// const orderName = document.querySelector("#orderName").value;

// console.log(orderName);

// const button = document.querySelector("input[type='submit']");

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("click");
//   // const orderName = document.querySelector("#orderName");
//   const orderName = document.order.orderName;
//   console.log(orderName.value);
// });

// // elements 라는 속성이 붙어야 한다.
// console.log(document.forms[0].elements[4]);

const select = document.querySelector("#fruits");
// console.log(select.options[4].value);

select.addEventListener("change", function () {
  console.log(this.options);
  console.log("chage");
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택하셨습니다. 가격은 5,000원 입니다.`);
});

const radioBtn = document.order.userAge;

// const checkBox = document.querySelector("input[name='alarm']:checked");

const radioBox = document.querySelectorAll("input[name='userAge']");

// forEach => 아이템, 인덱스, 배열 전체
radioBox.forEach((item) => {
  item.addEventListener("change", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 연령은 ${target.value}대입니다!`);
    }
  });
});

const checkBox = document.querySelectorAll("input[name='alarm']");

checkBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 관심은 ${target.value}입니다`);
    }
  });
});
