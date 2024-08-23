//  Callback //  promise //  fetch //  async  & await

// 01. 자바스크립트 언어 정의
// - 객체지향 프로그래밍 언어
// - 프로토타입 기반 프로그래밍 언어
// -  싱글스레드(Thread  = 길 // 도로) 방식 프로그래밍 언어

// 함수 => 함수 => 함수 =>
// 여러가지 고민을 해결하기 위해, 싱글스레드가 멀티스레드가 되고 있는  것처럼 실행해볼까?
// 싱글스레드 => 동기처리 방식
// 멀티스레드 => 비동기처리 방식
// - 콜백함수
// - 프로미스
// - fetch
// - async & await

// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 멀티스레드 => 비동기방식인것처럼
// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   setTimeout(() => console.log("B"), 1000);
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 멀티스레드 => 콜백
const displayA = () => {
  console.log("A");
};

const displayB = (callback) => {
  setTimeout(() => {
    callback();
    console.log("B");
  }, 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);
