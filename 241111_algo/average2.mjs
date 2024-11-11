// 값이 추가될 때 마다 1번의 수정이 필요하다.

const arr = [87, 70, 100];
let average = 0;

for (let i = 0; i < arr.length; i++) {
  average += arr[i];
}

average = average / arr.length;

console.log(average);

// 평균 점수 구하기
// 1. 배열의 모든 요소를 더한다.
// 2. 더한 값을 배열의 길이로 나눈다.
// 3. 나눈 값을 출력
