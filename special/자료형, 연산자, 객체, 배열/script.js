// const numA = 10;
// const numB = 20;
// const numC = undefined;
// const numD = null;
// console.log(numA);
// console.log(numA ?? numB);
// console.log(numC ?? numB);
// console.log(numD ?? numB);
// // ?? => 병합연산자

// /////////////////////////////////////////////////////////////////

// const strA = "안녕하세요!";
// typeof strA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자자료형이 아닙니다.");
// // === (조건식) ? 값 : 값 => 왼쪽값이 일치한다면 왼쪽값으로 출력

// const fruit = "apple";
// switch (fruit) {
//   case "apple":
//     console.log("사과");
//     break; // break가 없다면 바로 다음 단계로 넘어간다.
//   // return; => 종료만의 의미가 아닌, 값을 반환하고 종료한다. 라는 의미
//   case "banana":
//     console.log("바나나");
//     break;
//   default:
//     console.log("찾는 과일 없음");
// }
// // => react에서 많이 나오는 break

// /////////////////////////////////////////////////////////////////

// let objA = {};
// console.log(typeof objA);
// objA.numA = 1;
// console.log(objA);
// objA["numB"] = 2;
// console.log(objA);
// // 많이 나온다!

// let objB = new Object(); // 프로토타입 오브젝트
// console.log(objB);
// console.log(objA.numA);
// // 오브젝트

// const person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };
// // 객체 안에 있는 key 값을 배열로 반환!!
// const keyArr = Object.keys(person);
// console.log(keyArr);

// keyArr.forEach((key) => {
//   console.log(key);
//   let value = person[key];
//   console.log(value);
// });
// // 이것도 정말 많이 쓰임

// const testO = {
//   name: "David",
//   age: 20,
//   skill: "JS",
// };
// // const name = testO.name;
// // const age = testO.age;
// // const skill = testO.skill;
// // 이렇게 쪼개서 저장해야하는 번거로움이 있다. (비효율적)

// const { name, age, skill } = testO;
// // 이름이 같아야지만, 구조분해 할당 가능
// console.log(name, age, skill);
// // => 구조분해할당

// /////////////////////////////////////////////////////////////////

// const calcA = () => {
//   console.log("A");
//   return false;
// };
// const calcB = () => {
//   console.log("B");
//   return true;
// };

// const orCalcA = () => {
//   console.log("OR A");
//   return false;
// };
// const orCalcB = () => {
//   console.log("OR B");
//   return true;
// };

// console.log(calcA() && calcB()); // 앤드단락 회로평가
// console.log(calcB() && calcA());

// console.log(orCalcA() || orCalcB()); // 오어단락 회로평가
// console.log(orCalcB() || orCalcA());
// // react는 기본적으로 브라우저를 통해서 앱을 여는 순간 => 컴포넌트가 무조건 마운트
// // 가상돔 => 영화데이터를 찾아오도록 하는 fetch()
// // 정상적으로 fetch()를 통해서 불러오는 영화 api를 데이터를 출력하지 못함.

// // 찾아온 영화데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야하는 상황 => 20개
// // 이를 해소하기 위한 로딩스피너!!!!!!!!!!!!!!!!!!!!!!

// // 단락 회로 평가
// // -좌항 && 우항 : 좌항부터 값을 체크하는데, 좌항의 값이 true 아닌 false를 반환한다면, 우항의 값을 실행 x
// // - 좌항 || 우항 : 혹시라도 좌항의 값이 false를 반환하더라도, 만약 우항의 값이 true라면, 좌항의 반환값과 상관 없이 우항의 실행값을 반환

// /////////////////////////////////////////////////////////////////

// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [arrA, arrB];
// // const arrD = arrA.join(arrB);
// const arrE = [...arrA, ...arrB];
// const arrD = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(arrC);
// console.log(arrD);
// console.log(arrE);
// // => 전개연산자를 쓰는 이유
// // /////////////////////////////////////////////////////////////////

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = {
//   c: 3,
// };

// const objC = {
//   ...objA,
// };

// console.log(objC);
// // => 전개연산자는 원본데이터하고의 연결값을 해제하기 위해서다. 연결꼬리 끊기

// // /////////////////////////////////////////////////////////////////

let food = ["짜장면", "피자", "치킨"];
// // const newLength = food.push("탕수육");

// // const removedItem = food.pop();
// // console.log(removedItem);
// // console.log(food);

// const newLength = food.unshift("갈비찜");
// // => 맨 앞 부분의 값을 추가하고, 추가된 이후의 새로운 배열의 총 개수를 반환하는 메서드 함수
// console.log(food, newLength);

// const removedItem = food.shift();
// console.log(removedItem);
// console.log(food);

// const sliced = food.slice(0, 2);
// console.log(sliced);

// const sliced = food.slice(1);
// console.log(sliced);

// const arrA = [1, 2];
// const arrB = [3, 4];
// // 전개연산자를 사용하지 못 할 때가 있다.
// const arrC = arrA.concat(arrB);
// console.log(arrC);

// console.log(food.indexOf("치킨"));

// console.log(food.includes("마라샹궈"));
// console.log(food.includes("피자"));

// const arr = [
//   { name: "david" },
//   { name: "martin" },
//   { name: "romeo" },
//   { name: "juliet" },
// ];

// const element = arr.find((item) => item.name === "david");
// console.log(element);

// const arr = [
//   {
//     name: "슛돌이",
//     hobby: "축구",
//   },
//   {
//     name: "통키",
//     hobby: "피구",
//   },
//   {
//     name: "강속구",
//     hobby: "유구",
//   },
//   {
//     name: "태백산",
//     hobby: "피구",
//   },
// ];

// const filterdArr = arr.filter((item) => item.hobby === "피구");
// const filterdArr2 = arr.filter((item) => {
//   item.hobby === "피구";
// });

// const newArr = arr.map((item) => item.name);
// const newArr2 = arr.map((item) => {
//   item.name;
// });

// console.log(newArr);

// const arr1 = [10, 5, 3];

// arr1.sort();

// console.log(arr1);

// const compare = (a, b) => {
//   if (a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
// };
// arr1.sort(compare);
// console.log(arr1);

// console.log(food.join(""));
// console.log(food.join(","));
// console.log(food.join(" "));
// console.log(food.join("(*@)!U#@*()&$*()&@)(*#)@(!*#)(@&$*"));

// const arr3 = [1, 2, 3, 4, 5];

// const result = arr3.reduce((acc, item) => acc + item, 0);
// console.log(result);

// // /////////////////////////////////////////////////////////////////
