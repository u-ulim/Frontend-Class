function Book(title, price) {
  // 인스턴스 객체 생성
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에구매하였습니다!`);
};

const book1 = new Book("자바스크립트", 10000);

book1.buy();

// 상속 받는 객체 생성
function Textbook(title, price, major) {
  //call을 외친다.
  //this가 필요한 이유는 상속받는 게 같기 때문에
  Book.call(this, title, price);
  this.major = major;
}

Textbook.prototype.buyTextbook = function () {
  console.log(`${this.major} 전공서적, ${this.title}을(를) 구매했습니다`);
};

// 한 번 걸쳐서 값을 세팅해야함
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("타입스크립트", 20000, "컴퓨터공학");

book2.buyTextbook();

book2.buy();

// extends
// implement (*TS) : 특정 값을 상속을 받는다면, 반드시 필수적으로 상속밭은  값을 사용해야하는 조건,

// constructor
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  // constructor 밖에서 함수를 선언해야함.
  buy() {
    console.log(`${this.titlle}을(를) ${this.price}원에 구매하였습니다!`);
  }
}

const book3 = new BookC("자료구조", 10000);

book3.buy();

// 중간에 연결하는 작업이 필요가 없다.

// extends는 상속, 확장, 인플리먼트는 상속  후 확장해서 바로 적용하기
class TextbookC extends BookC {
  constructor(title, price, major) {
    // class를 활용한 extends는 꼭 this라는 인자값을 받아올 필요가 없다.

    super(title, price);
    this.major = major;
  }
  buyTextbook() {
    console.log(`${this.major} 전공서적, ${this.title}을(를) 구매했습니다.`);
  }
}

const book4 = new TextbookC("알고ㄱ리즘", 5000, "컴퓨터공학");

book4.buyTextbook();
book4.buy();
