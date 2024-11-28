import { Button } from "bootstrap";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Title = styled.div``;

const ButtonGroup = styled.div``;

const Question = () => {
  return (
    <Wrapper>
      <Title>나는 문제입니다!</Title>
      <ButtonGroup>
        <Button>나는 답변입니다!</Button>
        <Button>나는 답변입니다!</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;
