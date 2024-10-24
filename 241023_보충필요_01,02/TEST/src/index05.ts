// class Student {
//   // 필드는 뭐하는 곳?  키값,
//   // 필드는 인턴스 객체의 키값을 한다.
//   private name;
//   protected age;
//   public grade; // public은 생략가능
//   constructor(name: string, age: number, grade: number) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
//   study() {
//     console.log(`열심히 공부함`);
//   }
//   introduce() {
//     console.log(`안녕하세요! ${this.name} 입니다!`);
//   }
// }

// const studentB = new Student("Dk", 20, 2);

// console.log(studentB);
// console.log(studentB.introduce());

class StudentDeveloper extends Student {
  favoritSkill;
  constructor(name: string, age: number, grade: string, favoritSkill) {
    super(name, age, grade);
    this.favoritSkill = favoritSkill;
  }
  func() {
    this.name; // protected, private, public
    this.age;
  }
  programing() {
    console.log(`${this.favoritSkill}로 프로그래밍 합니다!`);
  }
}

const studentC = new StudentDeveloper("Ronaldo", 40, 2, "TS");

console.log(studentC.programing());

i; // 접근제어자 3개
// public : 모든 범위에서 접근할 수 있도록 (기본 default)
// private : 클래스 내부에서만 접근 가능
// protected : 클래스 내부 & 상속받은 파생 클래스 접근 가능
