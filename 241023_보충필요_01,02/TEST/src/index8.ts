const arr: number[] = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
console.log(newArr);

// 명령형 방식으로 프로그래밍 코드를 작성하는 것만 알고 있다.
// 선언형 방식으로 프로그래밍 코드를 작성해보자.

// 제너릭을 배우지 못했다면?

// const map = (
//   arr: unknown[],
//   callback: (item: unknown) => unknown
// ): unknown[] => {};

// high level 함수 (고급함수)
const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

// low-level 함수 (저급 함수)
// 명령형 방식
const arrTest = [1, 2, 3];
const result = arrTest.map((item) => item);
