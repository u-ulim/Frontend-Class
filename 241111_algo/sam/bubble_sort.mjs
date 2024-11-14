let arr = [4, 2, 3, 1];

/**
 * 버블 정렬(Bubble Sort) 알고리즘을 구현한 함수
 * 인접한 두 요소를 비교하여 큰 값을 뒤로 보내는 방식으로 정렬합니다
 * 시간복잡도:
 * - 최선의 경우: O(n) - 이미 정렬된 배열
 * - 평균/최악의 경우: O(n²)
 * 공간복잡도: O(1) - 추가 메모리 공간을 거의 사용하지 않음
 *
 * @param {Array} arr - 정렬할 배열
 * @returns {void} - 원본 배열을 직접 수정합니다
 */
const bubbleSort = (arr) => {
  // 전체 배열을 순회하는 외부 루프
  // i는 현재까지 완료된 패스 횟수를 나타냄
  for (let i = 0; i < arr.length; i++) {
    // 내부 루프: 인접한 요소들을 비교
    // arr.length-i-1까지만 비교하는 이유:
    // 각 패스마다 마지막 i개의 요소는 이미 정렬되어 있음
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 현재 요소가 다음 요소보다 크면 위치를 교환
      if (arr[j] > arr[j + 1]) {
        // 두 요소의 위치 교환(swap)
        let temp = arr[j]; // 임시 변수에 현재 요소 저장
        arr[j] = arr[j + 1]; // 다음 요소를 현재 위치로 이동
        arr[j + 1] = temp; // 임시 저장한 값을 다음 위치로 이동
      }
    }
  }
};

console.log("=== 배열 정렬 전 ===");
console.log(arr);

bubbleSort(arr);

console.log("=== 배열 정렬 후 ===");
console.log(arr);
