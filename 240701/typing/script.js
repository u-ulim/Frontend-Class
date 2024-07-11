const content =
  "Hi!🙋‍♂️ I'm DK, \n Front-End Developer. \n  Welcome to My World :D ";

const text = document.querySelector(".text");

let i = 0;
let typingInterval; // setInterval을 저장할 변수

const typing = () => {
  let txt = content[i++]; // 증감연산자

  text.innerHTML += txt === "\n" ? "<br>" : txt; // 삼항연산자

  if (i >= content.length) {
    clearInterval(typingInterval); // 타이핑 완료 후 setInterval 멈춤
  }
};

typingInterval = setInterval(typing, 100);
