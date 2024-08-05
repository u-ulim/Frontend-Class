// 01. 사용자로부터 태어난 년도를 받으세요.
// 02. 태어난 년도를 기준으로 나이가 몇 살인지 #result 공간에 출력해주세요.

const btn = document.querySelector(".btn");

let fc = () => {
  const result = document.querySelector("#result");
  let text = Number(prompt("출생년도를 입력해주세요"));
  const currentYear = 2024;
  text = currentYear - text;
  result.innerText = `당신의 나이는 ${text + 1}입니다`;
};

btn.addEventListener("click", fc);
