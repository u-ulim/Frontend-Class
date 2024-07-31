// 사용자로부터 어떤 숫자를 받습니다.
// 사용자에게 받은 숫자가 소수이면, 바탕화면에 00숫자는 소수입니다.
// 만약ㅣ 아니라면 00숫자는 소수가 아닙니다.
// 소수 = 소숫점을 가지고 있는 소수를 말하는 것이 아닌, 1과 자기 자신만으로 나눠질 수 있는 숫자

const number = prompt("숫자를 입력해주세용");

if (number === 1) {
  document.write(`1은 소수도 합성수도 아닙니다!`);
} else if (number === 2) {
  document.write(`2는 소수입니다`);
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      document.write(`${number}는 소수가 아닙니다`);
      break;
    } else {
      document.write(`${number}는 소수가 맞습니다`);
      break;
    }
  }
}
