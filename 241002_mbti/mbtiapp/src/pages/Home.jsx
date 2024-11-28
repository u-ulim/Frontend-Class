import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

const Wrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40px;
`;
const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.img`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #fff;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img className="rounded-circle" src="/cat/ggompang.jpeg" />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기!</Desc>
        <Button>테스트 시작하기</Button>
      </Contents>
      <Button>test</Button>
    </Wrapper>
  );
};

export default Home;
