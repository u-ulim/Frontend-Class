import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Button1 from "./Button1";
import { getFormattedDate, emotionList } from "../util";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

const Input = styled.input`
  border: none;
  background: #ececec;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;

const EditorSection = styled.div`
  margin-bottom: 40px;

  & h4 {
    font-size: 22px;
  }
`;

const Textarea = styled.textarea`
  border: none;
  background: #ececec;
  border-radius: 5px;
  padding: 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  width: 100%;
  min-height: 200px;
  resize: none;
  ::focus {
    outline: none;
  }
`;

const Buttongroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Emotiongroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

// App 최상위 부모컴포넌트 state// setState
// Editor 컴포넌트가 사용될 상황
// Editor 컴포넌트가 사용될 상황은 두가지다.
// 1) 신규 일기를 작성하고자 하는 경우
// 2) 이미 일기가 작성된 상태ㅔ서 수정, 편집하려고 하는 경우
// => 이미 작성된 일기값 필요
const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  return (
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
        <EditorSection>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </EditorSection>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 감정</h4>
        <Emotiongroup>
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.id}
              onClick={handleChangeEmotion}
              {...emotion}
              isSelected={state.emotionId === emotion.id}
            />
            // <img key={emotion.id} src={emotion.img} alt={emotion.name} />
          ))}
        </Emotiongroup>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        <EditorSection>
          <Textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </EditorSection>
      </EditorSection>
      <EditorSection>
        <Buttongroup>
          <Button type={""} title={"취소하기"} onClick={handleGoBack} />
          <Button type={"positive"} title={"작성완료"} onClick={handleSubmit} />
        </Buttongroup>
      </EditorSection>
    </div>
  );
};

export default Editor;
