import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);
  return <div>{id}번 Diary페이지</div>;
};

export default Diary;
