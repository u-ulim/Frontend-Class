const p = document.querySelector("p");
p.addEventListener("click", () => {
  console.log("p");
});

document.querySelector("section").addEventListener("click", () => {
  console.log("section");
});

document.querySelector("div").addEventListener("click", () => {
  console.log("div");
});

// 웹브라우저가 실행 => html, js 파싱(문서 읽으면서, 기본적으로 실행될 수 있을만한 요소는 실행)

// function testFnc() {
//   alert("시작");
// }

// testFnc();

const elements = document.querySelectorAll("*");
console.log(elements);

elements.forEach((element) => {
  element.addEventListener(
    "click",
    (e) => {
      console.log(`e.target: ${e.target.tagName}`);
      console.log(`e.currentTarget: ${e.currentTarget.tagName}`);
    },
    true
  );
});
