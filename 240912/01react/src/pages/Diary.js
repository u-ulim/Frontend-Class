import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import { getFormattedDate } from "../util";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();

  if (!data) {
    return <div>일기를 불러오고 있습니다!</div>;
  } else {
    const goBback = () => {
      navigate(-1);
    };
    const goEdit = () => {
      navigate(`/edit/${id}`);
    };
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`;
    // const params = useParams();
    // console.log(params);
    // const { id } = useParams();
    // console.log(id);
    return (
      <div>
        <Header
          leftChild={<Button title={"< 뒤로가기"} onClick={goBback} />}
          title={title}
          rightChild={<Button title={"수정하기"} onClick={goEdit} />}
        />
        {/* <div>{id}번 일기</div>
        <div>Diary 페이집니다</div> */}
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
