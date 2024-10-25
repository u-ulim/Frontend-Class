// Indexed Access Type
// 인덱스 값을 활용해서, 타입 안에 특정 속성값의 타입만 추출해내는 방법
// => 이터러블 객체는 인덱스 값이 있다.

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//   };
// }
// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "David",
//   },
// };

// const printAuthorInfo = (author: { id: number; name: string }) => {
//   console.log(`${author.id} - ${author.name}`);
// };

// 계속 값이 늘어난다면?
// 할 때 마다 계속 계속 계속
// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     // 추가
//     age: number;
//   };
// }
// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "David",
//     // 추가
//     age: 20,
//   },
// };

// const printAuthorInfo = (author: { id: number; name: string; age: number }) => {
//   console.log(`${author.id} - ${author.name} - ${author.age}`);
// };

// => Post에서만 값을 추가해주면 됨
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    // 추가
    age: number;
    bio: string;
  };
}
const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "David",
    // 추가
    age: 20,
    bio: "Seoul",
  },
};

const printAuthorInfo = (author: Post["author"]) => {
  console.log(`${author.id} - ${author.name} - ${author.age}`);
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post01: PostList[number] = {
  title: "채식주의자",
  content: "채식을 하자!",
  author: {
    id: 1,
    name: "한강",
    age: 20,
  },
};

// indexed Access Type
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type Tup3 = Tup[number];
