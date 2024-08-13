// 객체생성 =>  선언
const book1 = {
  title: "자바스크립트",
  level: "normal",
  study: "done",
};
// {key:value} => property (속성);
// css attribute  =>  속성?
// 한국어로서의 한계, property는 프로퍼티로 부르는 게 좋다.

// 객체 안에 담겨 있는 데이터를 찾아올 수 있다.
// 포로퍼티(속성)에 접급 2가지 방법
// 1)온점표기법
// 2)대괄호표기법

console.log(book1.title);
console.log(book1["level"]);
console.log(book1);

book1.study = "ready";
console.log(book1);

book1.master = "Daivid";
console.log(book1);

// 삭제하는법
delete book1.master;
console.log(book1);

let book2 = new Object();

console.log(typeof book2);
// JS 어딘가에 Class 생성자 함수를 활용해서 이미 누군가가  객체를 만들어 놓았음.
// Class 생성자 함수를 통해서 이미 생성되어진, 요소를 까져와서 사용할 때에는  반드시 new라는 예약어 + prototype함수를 활용해야 한다.
// prototype을 통해서 생성된 값을 인스턴스 객체라고 한다.
// 최초에 선언한 변수의 값으로 할당!

book2.title = "타입스크립트";
book2.author = "김지선";
book2.bestSeller = "Yes";

console.log(book2);

let book3 = new Array();

console.log(typeof book3);

// 객체중첩

const student = {
  name: "전진우",
  age: 20,
  favorite: "game",
  score: {
    history: 85,
    science: 90,
    average: () => {
      return (student.score.history + student.score.science) / 2;
    },
    average2: function () {
      return (this.history + this.science) / 2;
    },
    like() {
      alert(`전진우님은 컴퓨터를 좋아합니다. `);
    },
    //메서드 함수 (method)
  },
};

console.log(
  student.score.average(),
  student.score.average2(),
  student.score.like()
);
// score is  not defined

// function // 화살표함수 (호이스팅이 안  된다..!)

// 객체 안에 property 일부로서 탄생된 함수는  method라고 칭한다.

const window = {
  document: {
    html: {
      head: {
        meta: "a",
        link: "./",
      },
      body: {
        h1: "안녕",
        p: "반갑",
      },
    },
  },
  //..
  alert() {},
  prompt() {},
  scrollY() {},
};
