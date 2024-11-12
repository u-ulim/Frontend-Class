import Deque from "./deque.mjs";

let deque = new Deque();

console.log("=== addFirst === ");

console.log(`addFirst: ${deque.addFirst(1)}`);
console.log(`addFirst: ${deque.addFirst(2)}`);
console.log(`addFirst: ${deque.addFirst(3)}`);
console.log(`addFirst: ${deque.addFirst(4)}`);

console.log(deque.printAll());

console.log("==== removeFirst === ");

console.log(`removeFirst: ${deque.removeFirst()}`);
console.log(`removeFirst: ${deque.removeFirst()}`);
console.log(`removeFirst: ${deque.removeFirst()}`);
console.log(`removeFirst: ${deque.removeFirst()}`);

deque.removeFirst();

console.log(deque.printAll());

console.log("=== addLast === ");

deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.addLast(4);

console.log(deque.printAll());

class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }
  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }
}

let hashtable = new Hashtable();
