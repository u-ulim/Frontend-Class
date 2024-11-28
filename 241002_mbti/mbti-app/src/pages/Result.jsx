import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";

const Wrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  color: #fff;
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
  gap: 20px;
`;

const Title = styled.div`
  font-size: 30px;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #fff;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
  text-align: center;
  background: crimson;
  padding: 8px 14px;
  border-radius: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const test = useSearchParams();

  const mbti = searchParams.get("mbti");

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/");
  };

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImg>
          <img className="rounded-circle" src={resultData.image} />
        </LogoImg>
        <Desc>예비집사님과 찰떡궁합인 고양이는?😼{resultData.name}</Desc>
        <ButtonGroup>
          <Button onClick={handleClickButton}>테스트 다시시작하기</Button>
          <KakaoShareButton data={resultData} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
