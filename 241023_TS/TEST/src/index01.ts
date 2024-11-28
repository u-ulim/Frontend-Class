// const calc = (value: number, cb: (arg: number) => void): void => {
//   let add = (a: number, b: number) => a + b;
//   let multiply = (a: number, b: number) => a * b;

//   let result = multiply(add(1, 2), value);
//   cb(result);
// };

// calc(30, (result: number) => console.log(`result is ${result}`));

// // 고차함수 (2, 3차)
//   (a: number): ((arg0: number) => number) =>
//   (b: number) =>
//     a + b;

// const result = add(1)(2);
// // const result = add(1)(2)(10)
// // 첫번째 add =>
// // 두번째 multiply +>
// // 세번째

type NumberToNumber = (agr0: number) => number;

const add = (a: number): NumberToNumber => {
  const _add = (b: number): number => {
    return a + b;
  };
  return _add;
};
