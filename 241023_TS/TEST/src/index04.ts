// interface Person {
//   name: string;
//   age?: number;
//   sayHi?: () => void;
// }

// const peroson = {
//   name: "Dk",
//   sayHi: () => {
//     console.log("Hi");
//   },
// };

// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };

// type Type1 = number | string; // union
// type Type2 = number & string;

// interface Person {
//   name: string;
//   age: number;
// }

// type Type3 = number | string | Person;

// const person: Type3 = {
//   name: "Daivid",
//   age: 20,
// };

type Animal = {
  name: string;
  age: number;
};

interface Animal {
  name: string;
  age: number;
}

// 확장자를쓴다. extends
// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }
k;
// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Anima {
  isScratch: boolean;
}

interface Chicken extends Aninmal {
  isFly: boolean;
}

// interface 다중확장
interface DogCat extends Dog, Cat {
  breed: string;
}

const dog: Dog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
};
