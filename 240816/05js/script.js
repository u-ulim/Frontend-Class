// // 문자열 && 배열
// // 1) 둘 다  length
// // 2) 둘 다 index  (0부터 시작 // 좌측시작)

// // ES6문법이 적용되기 전
// const str5 = "Hello, everyone";

// // const array5 = str5.split("");
// // 문자열을 만든다? 그러면 굳이 split을 쓰지 않는다.
// // 이렇게 나온  것이 전개연산자 구문이다.
// const array5 = [...str5];
// // 전개연산자는 구분자의 메인 기능이 아닌, 배열로만 만들 수 있는  메인 기능 split과 별개의 차이점을 주기 위해서

// console.log(array5);

// const str6 = array5.join("");
// // 값을 다시

// console.log(str6);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result = firstCh + remainStr;

// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");

// document.write(result);

// slice와 join 왜 쓰는지, 어떻게 쓰는지

// 자료구조 & 알고리즘
// 배열 => 얼만큼 잘 활용?!

// 1) 생성자 함수
let arr = new Array();
arr[0] = "first";
arr[1] = "second";

console.log(arr);

let obj = new Object();

// 2) 변수 // 빈배열 할당 및 선언
let season = [];

season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";
console.log(season);

// 3) 직접 배열 선언  //  할당
const pets = ["dog", "cat", "lion"];
console.log(pets);
