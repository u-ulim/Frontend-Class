// // 반복적으로 만들어내는 행위 => Class

// class Node {
//   // next 는 디폴트 값으로 null을 가지고 있다. 없으면 null로 들어감
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// export { Node };

class Node {
  // next 는 디폴트 값으로 null을 가지고 있다. 없으면 null로 들어감
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);

// -----------------------------------------------------------------------

class LinkedList {
  constructor() {
    // head: 연결 리스트의 첫 번째 노드를 가리키는 포인터
    // 초기에는 비어있으므로 null로 설정
    this.head = null;
    // count: 현재 리스트에 있는 노드의 총 개수를 추적
    this.count = 0;
  }

  printAll() {
    // 현재 노드를 head부터 시작
    let currentNode = this.head;
    let text = "[";

    // 현재 노드가 null이 될 때까지(리스트의 끝까지) 반복
    // 계속 붙여나감
    while (currentNode !== null) {
      text += currentNode.data;
      // 현재 노드의 데이터를 출력
      console.log(currentNode.data);
      // 다음 노드로 이동
      currentNode = currentNode.next;

      // 마지막 노드가 아니면 콤마 붙임
      if (currentNode !== null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    // 1. 유효성 검사
    // index가 현재 노드 개수보다 크거나 음수인 경우 에러 발생
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔는데요?");
    }

    // 2. 새로운 노드 생성
    let newNode = new Node(data);

    // 3. 삽입 위치에 따른 처리
    if (index === 0) {
      // 3-1. 첫 번째 위치에 삽입하는 경우
      // 새 노드의 next를 현재 head로 설정
      newNode.next = this.head;
      // head를 새 노드로 변경
      this.head = newNode;
    } else {
      // 3-2. 중간이나 끝에 삽입하는 경우
      let currentNode = this.head;

      // 삽입하려는 위치의 바로 이전 노드까지 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      // 새 노드의 next를 현재 노드의 다음 노드로 연결
      // (이전 연결을 끊기 전에 저장)
      newNode.next = currentNode.next;

      // 현재 노드의 next를 새 노드로 연결
      currentNode.next = newNode;
    }

    // 노드 개수 증가
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    // 1. 유효성 검사: 인덱스가 음수이거나 노드 개수보다 크거나 같으면 에러
    if (index < 0 || index >= this.count) {
      throw new Error("범위를 넘어갔는데요?");
    }
    let currentNode = this.head;

    // 2. 첫 번째 노드를 삭제하는 경우 (index === 0)
    if (index === 0) {
      let deletedNode = this.head; // 삭제할 노드 저장
      this.head = this.head.next; // head를 두 번째 노드로 변경
      this.count--; // 전체 노드 개수 감소
      return deletedNode; // 삭제된 노드 반환
    }
    // 3. 중간이나 마지막 노드를 삭제하는 경우
    else {
      // 삭제하려는 노드의 이전 노드까지 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      // 예: [1] -> [2] -> [3] 에서 [2]를 삭제하는 경우
      let deletedNode = currentNode.next; // 삭제할 노드 [2] 저장
      currentNode.next = currentNode.next.next; // [1]의 next를 [3]으로 연결
      this.count--; // 전체 노드 개수 감소
      return deletedNode; // 삭제된 노드 반환
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("범위를 넘어갔는데요?");
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

// 연결리스트임
let list = new LinkedList();

// list.insertAt(0, 0);
// list.insertAt(1, 1);
// list.insertAt(2, 2);
// list.insertAt(3, 3);
// list.insertAt(4, 4);
// list.printAll();

export { Node, LinkedList };
