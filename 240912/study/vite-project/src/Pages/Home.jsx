import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Commons/Header";
import Button from "../Components/Commons/Button";
import DiaryList from "../Components/DiaryList";
import { DiaryDataContext } from "../Contexts/DiaryProvider";

const Home = () => {
  // pivot data로 월별 만들기
  const [pivotDate, setPivotDate] = useState(new Date());

  console.log(pivotDate.getFullYear(), pivotDate.getMonth());

  // data를 context로 가져와서, 필터링 하기(월별)
  const data = useContext(DiaryDataContext);
  useEffect(() => {
    if (data.length >= 1) {
      console.log(data);
    }
  }, [data]);
  const headerTitle = "";

  // 버튼 클릭 시 월 업데이트
  const onDecreaseMonth = () => {
    console.log("decre");
  };
  const onIncreaseMonth = () => {
    console.log("incre");
  };

  return (
    <div>
      <Header
        LeftChild={
          <Button type={"positive"} text="<" onClick={onDecreaseMonth} />
        }
        Title={`HOME ${headerTitle}`}
        RightChild={
          <Button type={"negative"} text=">" onClick={onIncreaseMonth} />
        }
      />
      <DiaryList />
    </div>
  );
};

export default Home;
