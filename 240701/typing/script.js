const content =
  "Hi!🙋‍♂️ I'm DK, \n Front-End Developer. \n  Welcome to My World :D ";

const text = document.querySelector(".text");

let i = 0;

const typing = () => {
  let txt = content[i++]; //증감연산자
  // text.innerHTML += txt; // 복합대입연산자

  text.innerHTML += text === "\n" ? "<br>" : txt; // 삼항연산자

  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};

setInterval(typing, 100);
