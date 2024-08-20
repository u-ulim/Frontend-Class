let numSet1 = new Set();

console.log(numSet1);

// add();

numSet1.add("one");

console.log(numSet1); // size라고 하는 프로퍼티를 가지고 있음 (map과 동일)

numSet1.add("one").add("two");

console.log(numSet1);

let numSet2 = new Set([1, 2, 3]);

console.log(numSet2);

let numSet3 = new Set([1, 2, 1, 3, 1, 5]);

//   자동으로 값 삭제..?  중복 되어진 값을 필터링 해버린다. 이게  배열이  가진 단점을 보완하는 것,
console.log(numSet3);

// map 배열5 객체5
// set  배열9 객체1

// Set은 배열의 상위 버전

const languages = new Set(["JS", "TS", "HTML", "CSS"]);

for (let language of languages.values()) {
  console.log(language);
}
for (let language of languages.keys()) {
  console.log(language);
}
