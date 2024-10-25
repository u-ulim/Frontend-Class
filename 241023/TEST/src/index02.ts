// // 타입구조도!
// // 모든 타입슈퍼타입 & 서브타입
// // 타입 수용 => 타입 호환성

// // let num1: number = 10;
// // let num2 = 10;

// // num1 = num2;
// // num2 = num1;

// let num1: number = 10;
// let num2: 10 = 10;

// num1 = num2;
// num2 = num1; // 에러가 됨,

// // 타입 스크립ㅈ트에 기본적으로 내장되어있는 내장타입 => 리터럴 타입
// // 서브타입을 슈퍼타입으로 허용시키는 액션 (*업캐스팅)
// // 슈퍼타입을 ㅈ서브타입으로 호환시키려고 하는 액션행위 (*다운캐스팅): 거의 대부분 불가

// // animal은 dog보다 슈퍼타입
// animal = dog;
// dog = animal;

// let book3 = programingBook;

// // 대수타입
// // 합집합의 형태로 타입 : union 타입

// let a: string | number;

// a = 1;
// a = "Hello";

// interface Dog {
//   name: string;
//   color: string;
// }

// interface Person {
//   name: string;
//   language: string;
// }

// type Union1 = Dog | Person;

// let union1: Union1 = {
//   name: "",
//   color: "",
// };

// let union2 = {
//   name: "",
// };

// let union3: Union1 = {
//   name: "",
//   color: "",
//   language: "",
// };

// // let union4: Union1 = {
// //   name: "",
// // };

// type Intersection = Dog & Person;

// let intersection: Intersection = {
//   name: "",
//   color: "",
//   language: "",
// };

// // 타입단언이 나온 이유는 오브젝트는 타입을 해당하지 못하니까?

// interface Person01 {
//   name: string;
//   age: number;
// }

// // 타입 추론이 되었지만, 타입 단언이 필요하다.
// // let person01: Person01 = {};
// // 타입 추론이 되었지만, 타입 단언이 필요하다.
// let person01 = {} as Person01;

// person01.name = "";
// person01.age = 20;

// 타입 단언이 되었다.
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "뽀삐",
  color: "brown",
  breed: "똥개",
} as Dog;

// 타입 단언은 any 다음으로 치트키
// as가 들어오는 순간 새로운 약속을 하는 것.
// 타입 단언을 실행시키려면 반드시 마음의 조건이 필요하다.
// 상호간 슈퍼 & 서브타입이어야 함.
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // 엥 여기서 왜 갑자기 에러가?
let num4 = 10 as unknown as string; // => 위로 한 번 갔다가 다시 온다.

let num5 = 10 as const; // 리터럴 타입이 되어버린다. 여기서 리터럴은..?

// 타입 가드
const func = (value: number | string) => {
  if (typeof value === "number") {
    value.toFixed(2); // 왜 에러지? 소수점 두 개를 주겠다는데,
  } else if (typeof value === "string") {
    value.toUpperCase(); // 이것도 왜? 반대급부 타입도 체크를 하기 때문이다.
  }
};
