// 정수 3자리로 이루어져있는 것으로 정의한다.
// const regexp = /\d{3}/;

// console.log(regexp.test("Hello")); // false
// console.log(regexp.test(123)); // true
// console.log(regexp.exec("123"));

// const str = "ES2024 is powerfull";
// const regexp = /es/; // false
// const regexp = /es/i; true i는 대소문자를 가리지 않음
// console.log(str.match(/ES2024/));

// console.log(str.replace(/ES2024/, "JAVASCRIPT"));

// console.log(regexp.test(str));

// console.log(str.match(/ES\d\d\d/));

// const hello = "Hello, everyone.";

// console.log(/^H/.test(hello)); // true
// console.log(/^h/.test(hello)); // false
// console.log(/^h/i.test(hello)); // true

// console.log(/one.$/.test(hello)); // true
// console.log(/e.$/.test(hello)); // true
// console.log(/one$/.test(hello)); // false

// const str = "ES2024";

// console.log(str.match(/[^0-9]/g));

// const str = "Oooops";
// console.log(str.match(/o{2}/));
// console.log(str.match(/o{2,}/));
// console.log(str.match(/o{2,4}/i));

// const str2 = "ES2024(ES8) is powerfull";

//  띄어쓰기 조심
// const regexp = /ES2024 |  ES8/;
// const regexp = /ES2024|ES8/;

// console.log(regexp.test(str2));

// 1) 숫자만 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/;

//  2) 양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]]\d*$/;

//  3) 음의 정수만 가능한 정규표현식 패턴
const regexp2 = /^\-[1-9]]\d*$/;

// 4) 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-z]/;
const regexp3_1 = /^[a-z]/i;
const regexp3_2 = /^[a-zA-Z]+$/;

// 5) 숫자와 영문자를 찾아오도록 하는 정규표현식 패턴

const regexp4 = /^[a-zA-Z0-9]+$/;

// 6) 한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣]+$/;

// 7) 한글과 영문ㅣ자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+$/;

// 8)  예)  문자열의 길이가 5~10개 패턴
const regexp7 = /^.{5,10}$/;
