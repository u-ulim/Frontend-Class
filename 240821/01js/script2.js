const phoneNumber = document.querySelector('input[type="text"]');
const warningMessage = document.querySelector("#warningMessage");

phoneNumber.addEventListener("keyup", function () {
  const numberValue = this.value;
  const trimNumber = numberValue.replace(/-/g, "");
  const ragexp = /^[0][0-9]{9,10}$/.test(trimNumber);
  const ragexp1 = /^[0]\d{8,9}[0-9]$/.test(trimNumber);
  const ragexp2 = /^0[0-9]{9,10}$/.test(trimNumber);

  if (ragexp === false)
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요!";
  else warningMessage.innerText = "";
});
