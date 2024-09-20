import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  // const navigate = useNavigate();
  // const goToDiary = (e) => {
  //   if (e.target === "value") navigate("/diary");
  //   else {
  //     alert("미가입 회원은 다이어리 리뷰 불가!");
  //     navigate("/home");
  //   }
  // };

  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();

  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    console.log(onDelete);
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      console.log("hd");
      navigate("/");
    } else {
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다..</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button title={"< 뒤로가기"} onClick={goBack} />}
          title={"일기 수정 페이지"}
          rightChild={
            <Button
              title={"삭제하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        ></Header>
      </div>
    );
  }
  // return (
  //   <div>
  //     Edit
  //     {/* <Link to={"/diary"}>다이어리 페이지</Link> */}
  //     {/* <button onClick={goToDiary}>DIARYPAGE</button> */}
  //   </div>
  // );
};

export default Edit;
