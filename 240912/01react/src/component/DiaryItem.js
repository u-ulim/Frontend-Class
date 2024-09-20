import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { getEmotionImgById } from "../util";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
`;
const ImgBg = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.img_section_1 {
    background: #64c964;
  }
  &.img_section_2 {
    background: #9dd772;
  }
  &.img_section_3 {
    background: #fdce17;
  }
  &.img_section_4 {
    background: #fd8446;
  }
  &.img_section_5 {
    background: #fd565f;
  }
`;

const DiaryContent = styled.div``;

const InfoSection = styled.div`
  flex: 1;
  cursor: pinter;
`;

const DateItem = styled.div`
font-size: 25px
font-weight: bold
margin-bottom: 5px`;

const ContentItem = styled.div`
  font-size: 20px;
`;

const Img = styled.img`
  width: 50%;
`;

const ButtonSection = styled.div`
  width: 110px;
`;

const DiaryItem = ({ id, date, content, emotionId }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <Wrapper>
      <DiaryContent>
        <ImgBg className={`img_section_${emotionId}`} onClick={goDetail}>
          <Img
            src={getEmotionImgById(emotionId)}
            alt={`emotions${emotionId}`}
          />
        </ImgBg>
      </DiaryContent>
      <InfoSection>
        <DateItem>{new Date(parseInt(date)).toLocaleDateString()}</DateItem>
        {/* <ContentItem>{content.slice(0, 25)}</ContentItem> */}
        {content}
      </InfoSection>
      <ButtonSection>
        <Button title={"수정하기"} onClick={goEdit} />
      </ButtonSection>
    </Wrapper>
  );
};

export default DiaryItem;
