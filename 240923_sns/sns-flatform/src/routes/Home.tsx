import styled from "styled-components";
import PostForm from "../components/PostForm";
import TimeLine from "../components/TimeLine";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  gap: 50px;
  /* overflow-y: scrolll; */
  height: 90vh;
`;

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
      <TimeLine />
    </Wrapper>
  );
};

export default Home;
