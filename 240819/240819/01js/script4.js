// JS ES6 => 혼종이 태어남 (과도한 욕심 )

// map & set
// 배열 & 객체
// 배열 : 인덱스 // 개수 // 넣고, 빼고
// 객체: 프로퍼티 형태  (*어떤 자료가  무슨 의미인지를)

// 객체가 특정 값을 넣고 빼고 할 수는 있지만, 배열만큼 효율적이지 못하다. 배열은 인덱스가 있기 때문에 가능하다.

// 그래서 배열과 객체가 합쳐진 울버린이 탄생 => map
// 프로퍼티가  인덱스  값을 가지고 있음
// const bag = new Map();
// bag.set("color", "red");
// Map => 배열의 형태를 띄고 있는이터러블한객체의 자료구조들의 공통적인 약점!
//  중복되는 값을 제어하지  못함  
// 그래서 중복되지 않는 것을 위해  
// Set 함수를 사용  

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

myCup.set("type", "mini");
// new Map을 사용해서, set을 이용, 그래서 추가적으로 프로퍼티를 추가 



console.log(myCup);
