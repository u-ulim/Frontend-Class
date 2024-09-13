import React from "react";
import Header from "../component/Header";
import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Editor from "../component/Editor";

const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));
  // 서치값을 받을 수 있고, 다시 보낼 수도 있음
  return (
    <div>
      HOMEPAGE
      {/* <Editor
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: "이전에 작성했던 일기",
        }}
        onSubmit={() => alert("작성완료!")}
      /> */}
      {/* <Header
        title="Home"
        leftChild={
          <Button
            text="positive btn"
            onClick={() => {
              alert("POSITIVE BUTTON");
            }}
            type="positive"
          />
        }
        rightChild={
          <Button
            text="negative btn"
            onClick={() => {
              alert("NEGATIVE BUTTON");
            }}
            type="negative"
          />
        }
      /> */}
      {/* <Button
        title="기본버튼"
        type=""
        onClick={() => {
          alert("hi");
        }}
      />
      <Button
        title="긍정버튼"
        type="positive"
        onClick={() => {
          alert("hi");
        }}
      />
      <Button
        title="부정버튼"
        type="negative"
        onClick={() => {
          alert("hi");
        }}
      /> */}
    </div>
  );
};

export default Home;
