// 함수에서 만날 수 있는 전개연산자 구문

// const fruits = ["apple", "banana", "grape"];

// console.log(...fruits);

function addNum(a, b) {
  const sum = a + b;
  return sum;
}

console.log(addNum(1, 3));

function addNumSpread(...numbers) {
  // return a + b;
  // => 반복문을 쓰면 되지 않을까?
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(addNumSpread(1, 3, 4, 5));

function displayFavorites(last, ...favs) {
  const str = `가장 좋아하는 과일은 ${last} 입니다!`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));
