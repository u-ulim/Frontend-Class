import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../assets/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const Title = styled.div`
  font-size: 30px;
  width: auto;
  margin-bottom: 10px;
  padding: 10px 22px;
  background: crimson;
  border-radius: 8px;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  & > button {
    width: 400px;
    height: 200px;
    font-size: 18px;
  }
`;

const Question = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const navigate = useNavigate();

  // const handleClickButtonA = (num, type) => {
  //   setQuestionNum(questionNum + 1);
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  // };

  // const handleClickButtonB = (num, type) => {
  //   setQuestionNum(questionNum + 1);
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  // };

  // console.log(totalScore);

  const handleClickButton = (num, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type
        ? {
            id: s.id,
            score: s.score + num,
          }
        : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      // 리듀스를 활용한 누산기 돌리기
      // newScore.reduce(("초기값", "현재값") => )
      // 여기 다시 한 번 짚고 넘어가기
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        "" // 문자열 속성 주기
      );
      console.log(mbti);
      // navigate("/result");
      navigate({
        pathname: "/result",
        // query는 키와 value로 구성되어있다.
        // search: `?${mbti}`
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  console.log(totalScore);

  return (
    <>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNum / QuestionData.length) * 100}
      />
      <Wrapper>
        <Title>{QuestionData[questionNum].title}</Title>
        <ButtonGroup>
          <Button
            onClick={() =>
              // handleClickButtonA(1, QuestionData[questionNum].type)
              handleClickButton(1, QuestionData[questionNum].type)
            }
          >
            {QuestionData[questionNum].answera}
          </Button>
          <Button
            onClick={() =>
              // handleClickButtonB(0, QuestionData[questionNum].type)
              handleClickButton(0, QuestionData[questionNum].type)
            }
          >
            {" "}
            {QuestionData[questionNum].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default Question;
