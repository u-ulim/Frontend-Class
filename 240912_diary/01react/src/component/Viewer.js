import React from "react";
import styled from "styled-components";
import { emotionList } from "../util";

const Wrapper = styled.div``;

const Section = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;

const Emotion = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &.emotion_img1 {
    background: #64c964;
  }
  &.emotion_img2 {
    background: #9dd772;
  }
  &.emotion_img3 {
    background: #fdce17;
  }
  &.emotion_img4 {
    background: #fd8446;
  }
  &.emotion_img5 {
    background: #fd565f;
  }
`;
const ContentBg = styled.div`
  width: 100%;
  height: 150px;
  background: #ececec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const Content = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 3rem;
`;

const Img = styled.img``;

const Description = styled.div`
  font-size: 25px;
  color: #fff;
`;

const Viewer = ({ content, emotionId }) => {
  // find 진짜 마니 쓰겠다,
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  return (
    <Wrapper>
      <Section>
        <Title>오늘의 감정</Title>
        <Emotion className={`emotion_img${emotionId}`}>
          <Img src={emotionItem.img} alt={emotionItem.name} />
          <Description>{emotionItem.name}</Description>
        </Emotion>
      </Section>
      <Section>
        <Title>오늘의 일기</Title>
        <ContentBg>
          <Content>{content}</Content>
        </ContentBg>
      </Section>
    </Wrapper>
  );
};

export default Viewer;
