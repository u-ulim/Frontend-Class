// Cllass : 자바스크립트 안에서 반복적으로 사용될 특정  요소를 간직한 객체의 형태를 템플릿화 하기 위한 목적으ㄹ노 Class 사용합니다.

// 교보문고 F/E => 매일매일 신간 책 => 객체 데이터로 만들ㅇ어서 B/E 서버에 데이터를 등록할 수 있도록 지원해주세요!

// 300 => 500?

const newBook1 = {
  title: "당신이 누군가를 죽였다",
  author: "히가시노  게이고",
  price: 17820,
  category: "미스터리스릴러",
};

// Class를 생성하는 2가지 방법

// 1) 생성자 함수 만들어 사용!
// 절대, never 화살표 함수를 쓰지 못함,
// this에 의존해야함
// 반드시 함수의 이름 대문자
// new Date
// new Object
// new Array

function Book(title, author, price, category) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.category = category;
}

const book1 = new Book(
  "당신이 누군가를 죽였다",
  "히가시노게이고",
  17820,
  "미스터리스릴러"
);

// 1. 생성자 함수 (function 대문자)  => 프로포타입이라고 하는 객체가 자동으로 탄생한다.  => 생성자 함수를 호출 => 프로토타입 객체를 실행 준비  => 생성자 함수 실행 => 함수의 값을 전달받는 변수 => 인스턴스 객체

// 2. 생성자 함수를 활용해서 탄생된 객체 (인스턴스)

console.log(book1);



// 2) Class 명령어를 사용해서 생성자함수를 만들 수 있음 
