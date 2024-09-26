import { useState } from "react";
import styled from "styled-components";
import PostForm from "../components/PostForm";

const Wrapper = styled.div``;

const Home = () => {
  // const navigate = useNavigate();
  // const logout = async () => {
  //   try {
  //     await auth.signOut(); // 비동기 로그아웃 처리
  //     console.log("로그아웃 성공!");
  //     navigate("/login");
  //   } catch (error) {
  //     console.error("로그아웃 중 오류 발생:", error); // 로그아웃 실패 시 오류 출력
  //   }
  // };

  // return <Button onClick={logout}>Logout</Button>;
  return (
    <Wrapper>
      <PostForm />
    </Wrapper>
  );
};

export default Home;
