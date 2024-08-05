const btn = document.querySelector("#btn");
const result = document.querySelector(".result");

console.log(result);

btn.addEventListener("click", (e) => {
  const num1 = document.querySelector("#first-num").value;
  const num2 = document.querySelector("#second-num").value;

  e.preventDefault();
  const max = num1 > num2 ? num1 : num2;
  console.log(max);
  let gcd = 0;
  for (let i = 1; i <= max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  result.innerText = `${gcd}`;
});
``;
