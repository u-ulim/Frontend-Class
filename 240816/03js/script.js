const str = "hello ";

const arr = ["today", "first", "theday "];

// 빈 문자열도 개수로 세어준다. (이는 오류를 일으키는 주범이 된다.)
// console.log(str.length);
// console.log(arr.length);

// 1) 특정 위치의 문자에 접근!!! : charAt(위치)
// console.log(str.charAt(4));

const counting = (string, word) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === word) count += 1;
  }
  return count;
};

// const string = prompt("원하시는 문자열을 입력하세요!");
// const word = prompt("그 중 찾고 싶은 문자열은 무엇인가요?");
// const result = counting(string, word);

// document.write(
//   `${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다!`
// );

// 2) indexOf()  : 특정 문자열을 인자값을 제공 => 해당 문자열의 시작하는 인덱스 값을 찾기

const str1 = "Good morning, every. Beautiful morning. Nice morning";

//문자열은 왼쪽부터 시작해서 오른쪽으로 읽어나간다. 없는 문자열은 -1로 값이 나옴
console.log(str1.indexOf("morning"));
let firstIndex = str1.indexOf("morning");
let secondIndex = str1.indexOf("morning", firstIndex + 1);
let thirdIndex = str1.indexOf("morning", secondIndex + 1);

console.log(thirdIndex);

// 3) 특정 문자열로  시작하거나 끝나거나 혹은  포함하고 있거나
// startsWidth() // endsWidth() // includes()
// 상기의 해당 조건에 부합하는지 여부 체크할 때 주로 사용!
// 조건에 부합하면 true // false

// const str2 = "Hello, everyone.";
const str2 = "Good morning.";

console.log(str2.startsWith("Hello")); // true
console.log(str2.startsWith("hello")); // false
console.log(str2.startsWith("He")); // true
console.log(str2.startsWith("Hello, ev")); // true

console.log(str2.startsWith("el")); // false
console.log(str2.startsWith("el", 1)); // true

console.log(str2.startsWith("o", 4)); // true

console.log(str2.endsWith("everyone.")); // true
console.log(str2.endsWith("Everyone.")); // false
console.log(str2.endsWith("one.")); // false

// ES6 이전 문법
console.log(str2.indexOf("every") === 5);
// ****가장 중요한 include ****  추가
console.log(str2.includes("every"));

let str3 = "  ab   cd  ef ";

console.log(str3);

// 여백을 전부 없애겠다.
console.log(str3.trim());
console.log(str3.trimStart()); // 앞쪽 삭제
console.log(str3.trimEnd()); // 뒷쪽  삭제

// 회원가입
// 휴대폰 입력
// input: text => 010-1234-5678 || 0101245678 || 010-12345678

console.log(str2.toUpperCase()); // 사용자가 입력한 값을  대소문자로 변형해서  일치시켜준다.
console.log(str2.toLowerCase()); // 사용자가 입력한 값을  대소문자로 변형해서  일치시켜준다.

// 문자열에서 특정  문자를 추출하는 방법!
// 사용자가 올바르지 않은 정보값을 넣었을 때,

console.log(str2.substring(5));
console.log(str2.substring(0, 4));

console.log(str2);

console.log(str2.slice(0, 4));
// substring() => 음수 값을 이해하지 못함
// slice() => 뒤에 나온 문법 :  음수 값을 사용 가능

console.log(str2.slice(-5, 12)); // 뒤에서 -1부터 시작해서 온다.

const str5 = "Hello everyone";

// abcd@naver.com

console.log(str5.split(" "));
console.log(str5.split(""));
// => " ", 공백도 포함 / "", 문자열 하나하나
// 중요한 점은 배열로 치환하는 경우가 많다.


