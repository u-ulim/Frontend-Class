// interface Developer {
//   type: string;
//   skill: string;
// }

// interface Student {
//   type: string;
//   school: string;
// }

// // 서로소 유니온

// interface User {
//   name: string;
//   profile: Developer | Student;
// }
// const developerUser: User = {
//   name: "David",
//   profile: {
//     type: "developer", // 서로소의 관계
//     skill: "typescript",
//   },
// };

// const stuedentUser: User = {
//   name: "Peter",
//   profile: {
//     type: "student", // 서로소의 관계
//     school: "서울대학교",
//   },
// };

// const gotoSchool = (user: User) => {
//   // console.log(`${user.profile.school}로 등교 완료!`) // 반대급부를 생각하기
//   // 타입가드
//   if (user.profile.type !== "student") {
//     console.log("잘못");
//     return;
//   }
//   if (user.profile.type ==="student") {
//     console.log(`${user.profile.type}`)
//   }
// };

// =>  타입가드를 쓰지 않고 만들기
interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: string;
}

// 서로소 유니온
interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "David",
  profile: {
    type: "developer", // 서로소의 관계
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "Peter",
  profile: {
    type: "student", // 서로소의 관계
    school: "서울대학교",
  },
};

const gotoSchool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
};

console.log(gotoSchool(studentUser));
