// // 배열 타입 정의
// const numArr: number[] = [1, 2, 3]; // 숫자 배열
// const strArr: string[] = ["hello", "world"]; // 문자열 배열
// const boolArr: Array<boolean> = [true, false, true]; // 불리언 배열

// const multiArr: (number | string)[] = [1, "hello"]; // 숫자 또는 문자열을 담는 배열

// let doubleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5],
// ]; // 2차원 배열 (배열 안에 배열)

// // 튜플 타입 정의 (각 요소의 타입과 순서 고정)
// let tup1: [number, number] = [1, 2];
// // 튜플은 길이와 타입이 고정, 하지만 push로 값 추가는 가능
// tup1.push(5); // 가능, 하지만 튜플에 추가된 값을 타입스크립트가 제대로 추적하지 못함
// // tup1 = [1, 2, 3]; // 오류: 초기 선언된 튜플의 길이가 맞지 않음

// // 객체 타입 정의
// // object 타입으로 정의한 경우 객체 속성에 직접 접근할 수 없음
// const user: object = {
//   id: 1,
//   name: "Dk",
// };
// // const result = user.id; // 오류: 'object' 타입에는 속성 'id'가 존재하지 않음

// // 구조적 타입 시스템을 적용한 객체 정의
// const userDetail: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "Dk",
// };

// // 선택적 속성 정의 (id는 선택적 속성)
// const userWithOptionalId: {
//   id?: number; // 들어올 수도 있고, 들어오지 않을 수도 있다.
//   name: string;
// } = {
//   id: 1,
//   name: "Dk",
// };

// // 읽기 전용 속성 (readonly)
// const config: {
//   readonly apikey: string;
// } = {
//   apikey: "3215469855",
// };
// // config.apikey = "Hacked"; // 오류 발생: 읽기 전용 속성은 수정 불가

// // 여러 사용자를 정의해야 할 때는 타입 별칭 사용
// type User = {
//   id: number;
//   name: string;
//   location: string;
// };

// let user1: User = {
//   id: 1,
//   name: "Dk",
//   location: "Seoul",
// };

// let user2: User = {
//   id: 2,
//   name: "Piter",
//   location: "Incheon",
// };

// // 지역 내에서만 유효한 타입 정의 가능
// const fnc = () => {
//   type User = {};
// };

// // 인덱스 시그니처를 사용한 타입 정의 (동적 키를 가질 때 유용)
// type CountryCodes = {
//   [key: string]: string;
// };

// const countryCodes: CountryCodes = {
//   Korea: "ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
// };

// // 인터페이스를 통한 객체 타입 정의
// interface Person {
//   name: string;
//   age: number;
//   etc?: boolean; // 선택적 속성
// }

// // class를 사용한 객체 생성

// // 기본 class 선언
// class Person1 {
//   name: string;
//   age: number;
// }

// const person03: Person1 = new Person1();
// person03.name = "peter";
// person03.age = 20;

// console.log(person03);

// // class에 접근 제어자 및 선택적 속성 추가
// class Person2 {
//   // 접근 제어자 (public, private, protected)
//   constructor(public name: string, public age?: number) {} // age는 선택적 속성
// }

// const person04 = new Person2("Romeo", 20);

// console.log(person04);

// // class가 interface를 구현 (implements)
// interface Person5 {
//   name: string;
//   age: number;
// }

// class Person6 implements Person5 {
//   constructor(public name: string, public age: number) {}
// }

// const person05 = new Person6("Juliet", 20);
// console.log(person05);

// // 추상클래스
// // 추상화
// // 형태가 없는 비정형화된 사물을 표현하는 것!
// // 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어놓고, 해당 추상적인 개념을 모티브로
// // 클래스를 선언 및 생성하는 것,

// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// class Person8 extends Person7 {
//   // super를 호출해야한다.
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const person06 = new Person8("Bruce", 20);
// console.log(person06);

// // static 속성!
// class TestA {
//   // initiaValue = 1;
//   static initialValue = 1;
// }

// // 가져오지 못한다. 하지만 static을 쓰면?
// const test01A = TestA.initialValue;
// console.log(test01A);
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "Dk",
//   role: Role.ADMIN,
// };
// const user2 = {
//   name: "Julie",
//   role: Role.USER,
// };
// const user3 = {
//   name: "JS",
//   role: Role.GUEST,
// };

// let test01: any = 10;
// test01 = "Hello";

// //

// let test02: unknown;

// test02 = "World";
// test02 = 1;
// test02 = () => {};

// let test03 = test01;

// let test04: number = 20;

// // test04 = test02; // unknown은 값을 받아올 수 있지만, 값을 줄 수는 없음 다른 곳으로 할당을 시켜줄 수 없다.
// // unknwon에 대한 옵션은 없다. 왜냐면 unknwon을 마음대로 쓸수가 없으니까,
// // 하지만 any는 많이 줄 수도 있고, 가져올 수도 있다.

// // 타입 제한 적용을 하면 된다.
// if (typeof test02 === "number") {
//   test04 = test02;
// }

// 함수 정의
// const func1 = (): string => {
//   return "hello";
// };

// const func2 = (): void => {
//   console.log("world");
// };

// let test05: void;

// test05 = 1;
// test05 = "Hello";
// text05 = true;
// // 이거는 되는,,
// test05 = undefined;

// let test06: never;

// // 전부 다 안 되는
// test06 = 1;
// test06 = "Hello";
// test06 = true;
// test06 = undefined;
// test06 = any;
// test06 = null;

// const func3 = (): never => {
//   while (true) {}
// };

// 이것을 바로 타입을 단언한다고 말한다.
// let obj: object = {
//   name: "Dk",
// };

// interface Nameable {
//   name: string;
// }

// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;

// name1;

// console.log(name1, name2);

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// // const printMe = (name: string, age: number): void => {
// //   console.log(`name: ${name}, age: ${age}`);
// // };

// // 함수 시그니처라고 부른다.
// const printMe: (arg01: string, arg02: number) => void = (name, age) => {
//   console.log(`name: ${name}, age: ${age}`);
// };

// // 타입별칭 (어디서부터 어디까지가 정의인지 잘 모르겠을 때)
// type PrintMeFnc = (name: string, age: number) => void;
// const printMe2: PrintMeFnc = (name, age) => {
//   console.log(`name: ${name}, age: ${age}`);
// };

// // 값이 보류가 되는 중 // => 타입 가드 설치
interface Nameable02 {
  name: string;
}

// const getName = (o: Nameable02) => {
//   return o !== undefined ? o.name : "Loading..";
// };

// const dataResult = getName(undefined);

// console.log(dataResult);
// console.log({ name: "Dk" });

const getName = (o: Nameable02 | undefined) => {
  return o.name;
};
