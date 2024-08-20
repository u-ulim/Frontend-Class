// let bag = new Map();

// bag.set("color", "red");

// console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

// myCup.set("type", "mini");
// myCup.set("purpose", "daily");
// => 이렇게  메서드 체이닝
myCup.set("type", "mini").set("purpose", "daily");
console.log(myCup);

// get을 사용해서 가져올 수  있다.
console.log(myCup.get("color"));

// size를 통해 length를 찾을 수 있음
console.log(myCup.size);

// set(), get(), size(), has(), delete(), clear()

// has를 통해 인자가 있으면, ture, 없으면 false
console.log(myCup.has("color")); // true
console.log(myCup.has("colors")); // false

// delete를 통해, 특정 값만 삭제
console.log(myCup.delete("colors"));
console.log(myCup.delete("color"));
console.log(myCup);

// // clear를  이용해  전부  삭제
// console.log(myCup.clear());
// console.log(myCup);  //  전부 삭제가 됨

// key를 가져옴
console.log(myCup.keys());

// 왜 어째서 배열만 유독 반복문을 쓸 수 있는가?

console.log(myCup.keys());
console.log(myCup.values());
console.log(myCup.entries());

// iterator  (이터레이터 객체) => 반복문 사용 객체 뒤에 이터레이터 객체를 붙일 수  있다.  이것을 이터러블하다고 부른다.

// 이터러블한 객체를 가져와서 반복문을 돌린다.
for (let key of myCup.keys()) {
  console.log(key);
}
for (let key of myCup.values()) {
  console.log(key);
}
for (let key of myCup.entries()) {
  console.log(key);
}


// SET이  왜  나왔는가?