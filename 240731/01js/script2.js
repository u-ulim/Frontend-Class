// 아래 id 및 pw는 A사용자의 id & pw 입니다.

const id = "ezen";
const pw = 1234;

// 01. 사용자로부터 id 및 pw정보값을 순차적으로 받습니다.

// 02. 사용자가 입력한 idㅏㄱㅄ이 위ㅇㅇ에 저장된 id와 일치하면 pw값을 받을 수 있는 단계로 넘어가고, 만약 id값이 일치하지 않으ㅇ면 일치하지 않는다는 알림창을 띄워줍니다.

// 03. pw값을 입력하는 단계에 도착해서 역시, pw가 일치하면 사용자님 반갑습니다. 라는 알림창이 나타나게 해주시고, 만약 pw가 일치하면 반갑습니다. & 일치하지 않는다면 pw값이 일치하지 않는다는 알ㅇ림창을 띄워줌

const userId = String(prompt("ID값을 입력해주세요!"));
let userPw;
if (userId === id) {
  userPw = Number(prompt("PW값을 입력해주세요"));
  if (userPw === pw) {
    alert("로그인 되었습니다!");
  } else {
    alert("일치하지 않습니다!");
    window.location.reload();
  }
} else {
  alert("값이 일치하지 않습니다.");
  location.reload();
}

//window 라고 하는 건 전역변수라서 안 써도 되고  생략 가능  ex) location.reload()
