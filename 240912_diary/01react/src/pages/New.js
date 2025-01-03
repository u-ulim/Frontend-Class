import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  console.log(onCreate);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    // const { date, content, emotionId } = data;
    // onCreate(date, content, emotionId);
    // 함수의 순서는 인자값 대로
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);

    navigate("/");
  };

  return (
    <div>
      <Header
        leftChild={<Button title={"뒤로가기"} onClick={goBack} />}
        title={"새 일기 쓰기"}
        rightChild={<Button title={"Home"} onClick={goHome} />}
      ></Header>
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
