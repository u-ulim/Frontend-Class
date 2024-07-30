// 사용자의 몸무게가 적정체중인가?
// 적정체중 = (본인의 키 - 100) * 0.9 => 오차범위

// const name = prompt("이름을 말씀해주세요!", "ex.홍길동");

// const height = parseFloat(prompt("키가 어떻게 되시나요?", "ex. 182.4"));

// const weight = parseFloat(prompt("몸무게도 말씀해주세요?", "ex.54.7"));

// const normalWeight = (height - 100) * 0.9;

// const result = weight >= normalWeight - 5 && weight <= normalWeight + 5;

// 조건식을 굉장히 쉽고,  간편하게 사용할 수 있는 3항 조건 연산자
// result = result ? "적정체중입니다" : "적정체중이 아닙니다";

// alert(`${name}님은 ${result}입니다`);

// 사용자로부터 3개의 값을 받으세요
// 교통비,

// const numsCalculate = () => {
//   const num1 = parseFloat(prompt("숫자를 적어주세요", "ex.3"));
//   const num2 = parseFloat(prompt("숫자를 적어주세요", "ex.3"));
//   const num3 = parseFloat(prompt("숫자를 적어주세요", "ex.5"));

//   const nums = num1 + num2 + num3;
//   console.log(nums);
//   if (nums > 10000) {
//     alert("예산 관리를 잘해주세요");
//     console.log(nums);
//   } else {
//     alert("예산 관리 잘하셨어ㅇ요");
//   }
// };

// numsCalculate();

// const sortNum = () => {
//   const num1 = Number(prompt("숫자를 적어주세요"));
//   const num2 = Number(prompt("숫자를 적어주세요"));
//   const num3 = Number(prompt("숫자를 적어주세요"));
//   if (num1 < num2) {
//     console.log(num1 < num3 ? num1 : num3);
//   } else {
//     console.log(num2 < num3 ? num2 : num3);
//   }
// };

// sortNum();

// 사용자에게 숫자 1개를 받습니다.
// 해당 숫자가 짝수인지 홀수인지 확인하여, 짝수라ㅡ면 알림창에 짝수 출력 만약 홀수라면 알림창에 홀수 출력

// 단, 사용자가 취소 버튼을

const excute = () => {
  if (userNumber !== null) {
    userNumber = parseInt(userNumber);
    userNumber % 2 === 0
      ? alert(`${userNumber} : 짝수 `)
      : alert(`${userNumber}: 홀수`);
  }
};

excute();
