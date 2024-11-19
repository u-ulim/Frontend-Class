// 초기 테스트용 배열
let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];

/**
 * 배열의 두 요소의 위치를 교환하는 헬퍼 함수
 * @param {Array} arr - 대상 배열
 * @param {number} index1 - 첫 번째 위치
 * @param {number} index2 - 두 번째 위치
 */
const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

/**
 * 배열을 피벗을 기준으로 분할하는 함수
 * @param {Array} arr - 정렬할 배열
 * @param {number} left - 분할 시작 인덱스
 * @param {number} right - 분할 끝 인덱스
 * @returns {number} - 피벗의 최종 위치
 */
const divide = (arr, left, right) => {
  // 첫 번째 요소를 피벗으로 선택
  let pivot = arr[left];
  // 피벗 다음 위치부터 시작
  let leftStartIndex = left + 1;
  // 배열의 마지막 위치
  let rightStartIndex = right;

  // leftStartIndex와 rightStartIndex가 교차할 때까지 반복
  while (leftStartIndex <= rightStartIndex) {
    // 피벗보다 큰 값을 찾을 때까지 왼쪽에서 오른쪽으로 이동
    while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++;
    }
    // 피벗보다 작은 값을 찾을 때까지 오른쪽에서 왼쪽으로 이동
    while (rightStartIndex >= left + 1 && pivot <= arr[rightStartIndex]) {
      rightStartIndex--;
    }
    // 교차하지 않았다면 두 값을 교환
    if (leftStartIndex <= rightStartIndex) {
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }
  // 피벗을 정렬된 위치로 이동
  swap(arr, left, rightStartIndex);
  return rightStartIndex;
};

/**
 * 퀵소트 메인 함수
 * @param {Array} arr - 정렬할 배열
 * @param {number} left - 정렬 시작 인덱스
 * @param {number} right - 정렬 끝 인덱스
 */
const quickSort = (arr, left, right) => {
  if (left <= right) {
    // 피벗을 기준으로 배열 분할
    let pivot = divide(arr, left, right);
    // 피벗 기준 왼쪽 부분 정렬
    quickSort(arr, left, pivot - 1);
    // 피벗 기준 오른쪽 부분 정렬
    quickSort(arr, pivot + 1, right);
  }
};

// 정렬 전 배열 출력
console.log("==== 정렬 전 ====");
console.log(arr);

// 퀵소트 실행 (전체 배열 범위 지정)
quickSort(arr, 0, arr.length - 1);

// 정렬 후 배열 출력
console.log("==== 정렬 후 ====");
console.log(arr);
