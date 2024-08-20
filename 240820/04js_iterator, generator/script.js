// 01. iterable => 순서대로 처리할 수 있는
// iterable 객체 => 객체 안에 담겨있는 각각의 독립적인 아이템요소를 찾아서 어떤 실행을 순서대로  처리할 수 있도록 할 수 있는 객체
// JS 안에서 iteralbe   객체 => 배열 & 문자열!

// for in문  (*객체) 유니크한 문법이긴 하지만, 이터러블하다고는 하지 못한다.
// iterable 객체도 조건이 있다.

// 01. for...of 반복문을  쓸 수 있어야  한다.
// 02. 전개연산자 구문을  사용할 수 있어야 한다.
// 03. 구조분해할당 할 수 있어야 한다.

// 파이썬은 이터러블하다.

// 표현식문 vs 실행문

// forEach / map
// 삼항조건연산자  =>  식
//  map => 식
// for, if, => 표현문
// JSX  =>  JavaScript And  XML

// 1)  fetch() 데이터를 가져오는 함수  내부에서  이벤트!

// 2) Promise()  // async & await

// let hi = "hello";

// for (let ch of hi) {
//   console.log(ch);
// }

// let chArray = [...hi];

// console.log(chArray);

// // let [ch1, ch2] = hi;

// let [ch1, ch2, ch3, ch4, ch5] = hi;
// console.log(ch1, ch2, ch3, ch4, ch5);

// console.log(hi);

// const arr = [1, 2, 3, 4, 5];

// console.log(arr);

// let it = arr[Symbol.iterator]();

// console.log(it);

// console.log(it.next()); // 배열의 속성값을 그대로 상속 받고,  이터레이터 객체도 상속,
// console.log(it.next()); // 배열의 속성값을 그대로 상속 받고,  이터레이터 객체도 상속,

// 이터러블한 객체 => 이터레이터  객체 속성을 가지고  있어야  한다.  이터레이터 객체 속성은  => next() 라고 메서드 함수를 무조건 가지고 있음. next()  =>  반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수!! next라고  하는  함수를 가지고  있기 때문에  가능한  것이었다.  두번째 실행은 두번째 인자값을 가져온다. done => 아직 false // value = undefined == done:  true;

// 제너레이터 (무언가를 생성시키는 어떤한 장치)

// 제너레이터 함수!
// 태생적으로 이터러블하지 ㅁ ㅗㅅ한 요소들을 이터러블한 속성을 갖게끔 하기 위한 목적으로 태어난 함수

// 이터러블하게 바꿔보자. 제너레이터  함수 (*)
function fnc() {
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
}

fnc();

// 제너레이터 함수
function* fnc2() {
  yield 1;
  yield 2;
  yield 3;
}

fnc2();

const g1 = fnc2();

// console.log(g1);
// console.log(g1.next());

for (let i of g1) {
  console.log(i);
}

// for문을 사용할  수 있다. (이터러블한 객체다)
