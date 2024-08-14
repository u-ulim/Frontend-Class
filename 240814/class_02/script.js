// // 꼭 대문자로 생성할 것, 소문자도 가능하지만, 사람들한테 알려주기 위해서
// // const Book = function () {}
// // function Book() {}

// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// };

// const book1 = new Book("자바스크립트", 648, false);
// // console.log(book1.title);
// console.log(book1.__proto__);
// // 인스턴스 객체의 프로토타입을 확인! 속성 (부모 확ㅁ인)

// console.log(Book.prototype);
// // 인스턴스 객체의 조상이 되는 프로토타입 객체를 생성해준 생성자 함수가 가지고 있는 속성, 메서드 함수를  확인할 때
// // 남이 만들어둔, 클래스를 사용할 때 프로토타입을 확인하면 좋음

// 상속에 대한 개념을 설명하기 전에, 인스턴스 객체의 기원!
// 찾은 해당 기원의 속성을 확인, prototype
// 객체 선언!
// 키 접근 : 온점 / 대괄호 표기법
//  prototype에 추가도 가능하다는 뜻,,!

function Newbook(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  // & 그런데,
}
// 상황에 따라서 이 기능만 추가해서 쓰고 싶ㅇ은데,

Newbook.prototype.finish = function () {
  let str = "";
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
};

const nbook1 = new Newbook("타ㅇ입스크립트", 648, false);

console.log(nbook1.finish());

// 상속 한 번 받아보기

function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습ㄴ니다`);
};

const book1 = new Book("뽀로로", 10000);

book1.buy();

function TextBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.major} 전꽁  서적, ${this.title}을 구매하였습니다!`);
};

//  생성자 함수에서만 필요한 도킹작업 나의 속성값을 물려 받아..!
Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("잘 될거야", 2000, "인생");

book2.buyTextBook();
book2.buy();
