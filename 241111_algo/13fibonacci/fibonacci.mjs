/**
 * 피보나치 수열 구현 (기본 재귀 방식)
 * 1, 1로 시작하여 앞의 두 수를 더한 값이 다음 값이 되는 수열
 * 예: 1, 1, 2, 3, 5, 8, 13, 21, ...
 */

/**
 * 기본적인 재귀를 사용한 피보나치 수열 계산
 * @param {number} n - 계산할 피보나치 수열의 n번째 값
 * @returns {number} n번째 피보나치 수
 */
const fibonacci = (n) => {
  // 기저 조건: 0이나 1이 입력되면 그대로 반환
  if (n === 0 || n === 1) return n;
  // 재귀 호출: n-1번째와 n-2번째 피보나치 수를 더함
  return fibonacci(n - 2) + fibonacci(n - 1);
};

/**
 * 메모이제이션을 활용한 최적화된 피보나치 수열 계산
 * 이미 계산된 값을 memo 배열에 저장하여 중복 계산을 방지
 * @param {number} n - 계산할 피보나치 수열의 n번째 값
 * @param {Array} memo - 계산된 값을 저장할 메모 배열
 * @returns {number} n번째 피보나치 수
 */
const fibonacci2 = (n, memo) => {
  // 기저 조건: 0이나 1이 입력되면 그대로 반환
  if (n === 0 || n === 1) return n;
  // 이미 계산된 값이 있다면 그 값을 반환
  if (memo[n] == null) {
    // 계산되지 않은 값이면 계산하여 메모 배열에 저장
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }
  // 메모된 값 반환
  return memo[n];
};

// 실행 시간 측정 - 기본 재귀 방식
let start = new Date();
console.log(fibonacci(5));
let end = new Date();
console.log(`fibonacci 함수 실행 시간 : ${end - start}ms`);

// 실행 시간 측정 - 메모이제이션 방식
let start2 = new Date();
console.log(fibonacci2(5, [])); // 빈 메모 배열 전달
let end2 = new Date();
console.log(`fibonacci2 함수 실행 시간 : ${end2 - start2}ms`);

// 기본 재귀 방식의 문제점:
// 1. 같은 값을 여러 번 중복 계산 (예: fibonacci(3)이 여러 번 호출됨)
// 2. n이 커질수록 함수 호출 횟수가 기하급수적으로 증가
// 3. 시간복잡도: O(2^n)

// 메모이제이션 방식의 장점:
// 1. 이미 계산된 값을 재사용하여 중복 계산 방지
// 2. 실행 시간이 크게 감소
// 3. 시간복잡도: O(n)
