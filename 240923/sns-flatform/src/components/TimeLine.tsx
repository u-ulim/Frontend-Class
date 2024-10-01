import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Post from "./Post";
// 객체의 타입정의는 interface이다.
// IPost => Interface Post (인터페이스로 타입을 정의했다.)
// 미리 정의함.
export interface IPost {
  id: string;
  createdAt: number;
  // photo: string;
  photo?: string;
  video?: string;
  post?: string;
  userId: string;
  userName: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  padding: 0 10px;
`;

const TimeLine = () => {
  // 제너릭을 배열로 줌, IPost라고 하는 객체의 형태
  // 배열이 들어올 건데, IPost의 형태를 띄고 있을 거야.

  const [posts, setPosts] = useState<IPost[]>([]);

  // const fetchPosts = async () => {
  //   const postsQuery = query(
  //     collection(db, "contents"),
  //     orderBy("createdAt", "desc")
  //   );
  //   // const snapshot = await getDocs(postsQuery);
  //   // // 값 찾아오기
  //   // const postList = snapshot.docs.map((doc) => {
  //   //   const { createdAt, photo, video, post, userId, userName } = doc.data();
  //   //   return {
  //   //     id: doc.id,
  //   //     createdAt,
  //   //     photo,
  //   //     video,
  //   //     post,
  //   //     userId: userId,
  //   //     userName: userName, // 중복 생략 가능
  //   //   };
  //   // });

  //   // => 실시간으로 변경하게끔 하는 파이어베이스 snapshot
  //   // real time으로 반영하기 때문에,  기존의 10~100개 컨텐츠도 전부 update가 되어버린다. 이는 엄청난 메모리 누수가 일어날 수 있다.

  //   // =>  unsubscribe

  //   const unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
  //     const postList = snapshot.docs.map((doc) => {
  //       const { createdAt, photo, video, post, userId, userName } = doc.data();
  //       return {
  //         id: doc.id,
  //         createdAt,
  //         photo,
  //         video,
  //         post,
  //         userId: userId,
  //         userName: userName, // 중복 생략 가능
  //       };
  //     });

  //     setPosts(postList);
  //   });
  // };

  // 컴포넌트가 마운트 되는 시점에서만, 작동
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    const fetchPosts = async () => {
      const postsQuery = query(
        collection(db, "contents"),
        orderBy("createdAt", "desc"),
        limit(25) // 25개까지만
      );
      // const snapshot = await getDocs(postsQuery);
      // // 값 찾아오기
      // const postList = snapshot.docs.map((doc) => {
      //   const { createdAt, photo, video, post, userId, userName } = doc.data();
      //   return {
      //     id: doc.id,
      //     createdAt,
      //     photo,
      //     video,
      //     post,
      //     userId: userId,
      //     userName: userName, // 중복 생략 가능
      //   };
      // });

      // => 실시간으로 변경하게끔 하는 파이어베이스 snapshot
      // real time으로 반영하기 때문에,  기존의 10~100개 컨텐츠도 전부 update가 되어버린다. 이는 엄청난 메모리 누수가 일어날 수 있다.

      // =>  unsubscribe

      // const unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
      unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
        const postList = snapshot.docs.map((doc) => {
          const { createdAt, photo, video, post, userId, userName } =
            doc.data();
          return {
            id: doc.id,
            createdAt,
            photo,
            video,
            post,
            userId: userId,
            userName: userName, // 중복 생략 가능
          };
        });
        setPosts(postList);
      });
    };
    fetchPosts();
    // unmount가 되었을 때, return을 해야한다.
    return () => {
      // unsubscribe가 있으면 실행시켜줘
      unsubscribe && unsubscribe();
    };
  }, []);
  // {JSON.stringify(posts)}
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

export default TimeLine;
