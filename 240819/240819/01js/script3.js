// 현장  투입
// 만들어는 낸다.
// 단적으로 내가  알고 있는 것만

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((number) => number * 2);

// console.log(newNumbers);
// console.log(numbers);

// const newNumbers01 = numbers.map((number, index) => index + number * 3);

// console.log(newNumbers01);

// (반복을 돌리고 있다는 건, 반쯤 왔다는 것, 자료를 찾은 것 )

// const scores = [90, 35, 64, 88, 45, 92];

// const highScores = scores.filter((score) => score >= 85);
// 이건 그대로 가는 것임

// console.log(highScores);

// React.js => Middle Reducer

const numbers = [1, 2, 3, 4, 5];

// 누산기 => 계산을 누적해서 하겠다.
let result = numbers.reduce((total, current) => total + current, 0);

console.log(result);

// total : 연산된 값을 누적 및 저장해놓는 변수의 역할 

// TS => 고차함수

// 명령형 & 선언형 프로그래밍  함수
// 저급함수 (로우레벨)
// 고급함수 => (하이레벨) 함수를 만든다. 고급함수를 쓰게 되면, 커스터마이징을 할 수 있다. 나만의 추가 기능도 넣을 거야. 이 상황에서 이걸 쓸거야.