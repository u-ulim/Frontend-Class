const userName = prompt();

if (userName === "") {
  alert("사용자 이름을 입력해주세요");
} else if (userName === "admin") {
  alert("hi");
} else {
  alert("정보가 생성 되어있지 않습니다.");
}
