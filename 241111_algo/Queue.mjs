import DoublyLinkedList from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.queue = new DoublyLinkedList();
  }
  enqueue(data) {
    this.queue.append(data);
  }

  dequeue() {
    return this.queue.deleteFirst();
  }
}

export default Queue;
