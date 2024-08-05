// 끝말잇기게임
// 1. 제시어의 끝 단어 확인
// 1-1 컴퓨터에게 최조의 제시어가 무엇인지 알려줘야함
// 1-2 3-1에서 이벤트의 시작을 알리는 "입력 버튼"이 무엇인지 알려줘야함

// 2. 끝 단어로 시작하는 단어 입력
// 2-1 컴퓨터는 사용자가 입력한 단어가 무엇인지 알아야함
// 2-2 끝 단어로 시작하는 단어와 == 사용자가 입력한 제시어의 끝 단어가 맞는지 컴퓨터는 확인을 할 수 있어야함

// 3. 단어 입력 후 입력 버튼 클릭
// 3-1 컴퓨터는 입력버튼이 클릭이 되면 => 검증시작(*이벤트 필요)

// 4.문제 여부 판단 후 => 문제 없다 || 문제 있다
// 4-1 조건에 따라서 값을 어떻게 출력할지

// const button = document.querySelector(".search");
// // console.log(button);
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("입력버튼 클릭!");
// });

//Word Game
// 리펙토링
const gameStart = (e) => {
  e.preventDefault();
  // 제시어 찾기
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  // 제시어 마지막 단어와 입력한 첫번째 단어 비교 = 문자열 개념 필요 산(0)기(1)슭(2)
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  // console.log(lastword, firstWord);
  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
    document.querySelector("#myword").value = "";
  }
};

// input 에서는 click 아니고 submit 이벤트 써야함
const button = document.querySelector(".word_text form");
button.addEventListener("submit", gameStart);

//Lotto Game

// 1. 클릭! 버튼이 무엇인지 컴퓨터에게 알려줘야함
// 1-1 부터 45까지의 6개의 숫자가 중복없이 랜덤으로 동시에 추출되어야 함

//2.클릭! 버튼 클릭시, 숫자가 생성되어야함 *이벤트

//3. js에는 내장 객체가 있음 > 숫자를 랜덤으로 생성해주는 함수가 있음 (함수는 객체 안에 포함되어있는 것)
//3-1 random() => 0~1 미만의 실수를 난수의 형태로 생성

//0.9999999999999 * 45(floor 사용) || 44 (ceil 사용)
//*소수점을 없애야 하는 필요가 있음
//방법 1 floor() => 소수점을 버림 : 0이 나올 수 있음 +1 해줘야함
//방법 2 ceil () => 소수점을 올림
//방법 3 round() => 소수점을 반올림

//4. 숫자가 중복되서는 안됨
//4-1 set() 클래스 함수 사용 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정인데 만약 중복된 값이 생성된 경우 1개로 합쳐주는 역할
//4-2 6개의 숫자 완성
// => 2번째 & 4번째 숫자 같은 경우 합쳐져서 5개 숫자만 나옴
//조건문 사용 => 재추첨을 하겠습니다 알려주고 => 재추첨

const lottoButton = document.querySelector(".wrapper_lotto_btn");

const result = document.querySelector(".game_lotto_number");
// console.log(result);

const luckyNumber = {
  //(digitCount = 키 + 6 = value) = 객체
  digitCount: 6,
  maxNumber: 44,
};

// 하단도 가능
// const lottoNumber = 6;
// const lottoCount =44;

const startLotto = () => {
  // digitCount, maxNumber 둘다 찾아와야해서
  // 구조 분해 할당 함 ⭐️ 많이 씀
  const { digitCount, maxNumber } = luckyNumber;
  // console.log(digitCount, maxNumber);
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    // 배열의 형태를 띄고있는 myNumber를 문자열로 치환
    //전개연산자 변수
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
  console.log(myNumber);
};

lottoButton.addEventListener("click", startLotto);
