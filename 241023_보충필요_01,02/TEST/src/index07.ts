// // // 제네릭이 필요한 상황! => 종합적인 타입을 정의하고 싶을 때 사용한다!
// // // General Hospital : 종합병원
// // const func = (value:unknown) => {
// //   return value;
// // };
// // const num = func(10);
// // num.toUpperCase(); // => any를 쓰게되면, 이게 필터링이 되지가 않는다.
// // // 근데 언노운을 쓰면? 타입 가드를 써야한다. 모든 곳에, if 필터링 즉 가드를 해야한다.
// // if(typeof num === "string") {
// //   num.toUpperCase();
// // }

// // func(10);
// // func("Daivd");
// // func([1, 2, 3]);
// // func({ name: "Dk", age: 20 });

// // 이게 제너릭을 활용한 문법 //
// // const func = <T>(valule: T): T => {
// //   return valule;
// // }

// // a, b를 반환하는,
// const swap = <T, U>(a: T, b: U) => {
//   return [b, a];
// };

// // 제너릭 타입의 응용형태
// const [a, b] = swap("1", 2);

// const funcArray = <T>(data: T[]): T => {
//   return data[0];
// };

// const num = funcArray([0, 1, 2]);

// console.log(num);

// let str = funcArray([1, "Heollo", "World"]);
// console.log(str);

// const retunFirst = <T>(data: [T, ...unknown[]]): T => {
//   return data[0];
// };

// const str = retunFirst([1, "hello", "world"]);

// console.log(str);

const func4 = <T extends { length: number }>(data: T): number => {
  return data.length;
};

console.log(func4("123"));
console.log(func4([1, 2, 3]));
console.log(func4({ length: 1 }));
console.log(func4(null));
console.log(func4(undefined));
