// let pets = ["dog", "cat", "mouse"];

// pets[0] = "hamster";
// console.log(pets[0]);

// 이터러블 객체
// 배열 => 이터러블한 객체다.
// 이터러블하지 않은  것이 더 많다.

// iterator 가 있냐 없냐에 따라서, 이터레이터 요소!
// 반복문을 쓸 수 있는지?
// 제너레이터
// map & set

// for // for  of  // forEach
// 1) 복수형
// 2) 블록변수 값 왜 0부터 시작하는지?

// const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//  초기깞  // 범위 //  증감

// for (let color of colors) {
// }

// colors.forEach((color, index) => {
//   console.log(`colors[${index}]  :  ${color}`);
// });

// colors.forEach((color, index, array) => {
//   console.log(`p${array}] [${index}] : [${color}]`);
// });

// // 둘 이상의 배열을 한  개로 합쳐노는 역할
// const vegitable = ["양상추", "'토마토", "피ㅣ클"];
// const cheese = ["모짜렐라", "슈레드"];
// const meat = ["불고기"];

// const meatBurger = vegitable.concat(meat, "빵");

// console.log(meatBurger);

// // 전깨연산자

// const cheeseBurger = [...vegitable, ...cheese, "빵"];
// console.log(cheeseBurger);

// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers);

// // 순서를 바꿔주는  역할
// console.log(numbers.reverse());

// let week = ["sun", "mon", "tue"];

// let values = [5, 20, 3, 11, 4, 15];

// 1. 배열산ㅓ언할  때, 변수명 복수
// 2. 일반 for문 선언,  블록변수  0으로 시작
// 3. 배열을 담는 변수를 선언할 때, const vs let
// => 배열의  특정 메서드 함수들 => 새로운 배열을 생성 해주는 메서드 함수
// => 빈  배열을 생성 => 값을 추가하는 행위

// console.log(week);
// console.log(week.sort());
// // sort는  이렇게 쓰지 않는다.
// console.log(values);
// console.log(values.sort());
// // sort => 개발자가 정의하고자 하는 함수를 콜백함수로 반드시 입력!

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === b) return 0;
// });

// console.log(values);

// values.sort((a, b) => {
//   return b - a;
// });

// console.log(values);

// let animals = ["lion", "bear", "bird"];

// console.log(animals);

// animals.pop();
// // pop은  배열의 가장  뒤에서부터 제거한ㄷ마.

// console.log(animals);

// animals.push("tiger");

// console.log(animals);

// let fruits = ["apple", "pear", "banana"];

// fruits.shift();
// console.log(fruits);

// fruits.unshift("cherry");
// console.log(fruits);

let subjects = ["html", "css", "javascript", "react", "typescript"];

// console.log(subjects.splice(2));

let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(week.splice(1, 5)); // 1번 인덱스부터 ~ 5개 (두번째 인덱스는 갯수를 이용)

console.log(week.splice(1, 5, "holiday"));
// splice는  원본데이터값을 변경한다. 이것을  조심해서 사용해야한다.
// 1번 인덱스에서 5번까지의 값을  holiday로 교체한다.
console.log(week.splice(4, 0, "holiday"));

console.log(week);

let colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2));
console.log(colors.slice(1, 4));

console.log(colors);
// 원본을  그대로 놔둠
