// // Keyof 연산자 : 객체 타입으로부터 모든 속성의 key의 타입을 유니온 형식으로 추출해주는 연산자

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

// const person: Person = {
//   name: "David",
//   age: 20,
//   // 이또한 하나가 늘어나면, 또 추가가 되는 불편한 상황이 생긴다.
//   location: "seoul",
// };
// // 이또한 하나가 늘어나면, 또 추가가 되는 불편한 상황이 생긴다.
// // const getProperty = (person: Person, key: "name" | "age" | "location") => {
// //   return person[key];
// // };

// const getProperty = (person: Person, key: keyof Person) => {
//   return person[key];
// };

// => 여기서 확장
// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }
// type Person = {
//   // 이렇게 안 써도 됨
//   //   name: string;
//   //   age: number;
//   //   location: string;
// };



// => type을 
type Person = typeof person;

const person = {
  name: "David",
  age: 20,
  location: "seoul",
};

const getProperty = (person: Person, key: keyof Person) => {
  return person[key];
};
