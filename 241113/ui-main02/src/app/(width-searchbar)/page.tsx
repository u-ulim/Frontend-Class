"use client";

import styles from "./page.module.css";
// import { useEffect } from "react";
import ClientComponent from "../../components/client-component";
export default function Home() {
  // console.log("컴포넌트 실행!");
  // const [state, setState] = useState("");
  // useEffect(() => {
  //   console.log("useEffect 실행!");
  // }, []);

  // console.log("Home 컴포넌트 실행!");
  // const APIKEY = "12345";
  // useEffect와 useState를 쓰지 않는 걸 추천 (디폴트가 서버 컴포넌트 페이지다, 기본적으로 클라이언트는 쓰지 않길 권장)
  // 그렇다면 useEffect와 useState를 쓰려면?
  // useEffect와 useState를 쓰려면 getServerSideProps를 써야한다
  // getServerSideProps는 서버에서만 동작하는 함수이다
  // useEffect(() => {}, []);

  return (
    <div className={styles.page}>
      index page
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
