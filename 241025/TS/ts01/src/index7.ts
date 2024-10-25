// 맵드 타입
// 기존의 객체 타입을 기반으로 새로운 객체의 타입을 만들어주는 타입

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// // 이렇게 뒷 부분에 달아줌, 사용자의 정보를 찾아오는 역할 함수
// const fetchUser = (): User => {
//   return {
//     id: 1,
//     name: "David",
//     age: 20,
//   };
// };

// // 사용자의 정보를 업데이트하는 역할 함수
// const updateUser = (user: User) => {
//   console.log(user);
// };

// // updateUser(id: 10, name: "Peter",)
// updateUser({ age: 20 }); // 우리는 항상 옵셔널을 써야하는가?

/////////////////////////////////////////

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// type PartialUser = {
//   [key in "id" | "name" | "age"]?: User[key];
// };

// // 이렇게 뒷 부분에 달아줌, 사용자의 정보를 찾아오는 역할 함수
// const fetchUser = (): User => {
//   return {
//     id: 1,
//     name: "David",
//     age: 20,
//   };
// };

// // 사용자의 정보를 업데이트하는 역할 함수
// const updateUser = (user: User) => {
//   console.log(user);
// };

// // updateUser(id: 10, name: "Peter",)
// updateUser({ age: 20 });

/////////////////////////////////////////

interface User {
  id: number;
  name: string;
  age: number;
}

// 이렇게 타입만 가변적으로 만들어줌, 원본만 추가를 하면 된다. 불필요한 반복을 줄임
type PartialUser = {
  [key in keyof User]?: User[key];
};

// 이렇게 뒷 부분에 달아줌, 사용자의 정보를 찾아오는 역할 함수
const fetchUser = (): User => {
  return {
    id: 1,
    name: "David",
    age: 20,
  };
};

// 사용자의 정보를 업데이트하는 역할 함수
const updateUser = (user: PartialUser) => {
  console.log(user);
};

// updateUser(id: 10, name: "Peter",)
updateUser({ age: 20 }); // 우리는 항상 옵셔널을 써야하는가?
