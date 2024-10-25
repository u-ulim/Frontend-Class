class NumberList {
  constructor(public list: number[]) {}
  // 02. 여기 push는 임의로 만든
  push(data: number) {
    // 01. 아래의 push는 JS push이고
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);

console.log(numberList);
// number, string 각각 마다 계속 지정해줘야하는 번거로움이 생긴다.
// 제너릭을 응용하고자 함
class StringList {
  constructor(public list: string[]) {}
  // 02. 여기 push는 임의로 만든
  push(data: string) {
    // 01. 아래의 push는 JS push이고
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

// 이렇게 하면 가변적으로 값을 다 품을 수 있음
class List<T> {
  constructor(public list: T[]) {}
  // 02. 여기 push는 임의로 만든
  push(data: T) {
    // 01. 아래의 push는 JS push이고
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList2 = new List([1, 2, 3]);
console.log(numberList2);
