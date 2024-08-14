// 기본 매개변수 설정 가능
function Book(title, pages, done = false) {
  // field
  this.title = title;
  this.pages = pages;
  this.done = done;

  // method
  this.finish = function () {
    let str = "";

    this.done === false ? (str = "아직 읽는 중") : "완독!";

    return str;
  };
}

const book1 = new Book("하이", "하이");

console.log(book1);

// 1) 생성자 함수를 선언 => 프로토타입 객체 생성

// 2) 변수를 선언 && 생성자 함수를 호출 및 할당

// 3) 생성자 함수가 가지고 있던 프로토타입 객체 활성 => 해당 변수, 인스턴스 객체(!)

// 4) 해당 변수 => 인스턴스 객체

// 객체지향 프로그래밍 언어 (50)
// => 객체지향 프토토타입 기반의 프로그래밍 언어 (80)
// => 클래스 => 2016에 나왔고, 그 이전은 클래스 비스무리한
// 객체지향 클래스 기반의 프로그래밍 언어 : C, JAVA
// ES => 2016년에 Class 기능을 넣기 시작. 일반적인 자바나 백엔드 프로그래밍 언어와는 결이 많이 다르다.

// ES => Class: Syntactic sugar
//  이 안에는 반드시 method 함수 밖에 못  들어감
class Book2 {
  // 여기 안으로 들어감
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
}
// 밖에서 써야함
function finish() {
  let str = "";
  this.done = false ? (str = "읽는 중") : (str = "완독");
  return str;
}

finish();

// TS => 접근제어자 // 추상화
// public, private, protected
// ES6 = ? 2015년
