import React from "react";
import "../components/Body.css";
const Body = ({ name, location, favorList }) => {
  // 객체 그 자체로는 쓸 수 없음
  // const number = {
  //   first: 1,
  // };

  // 객체의 값을 접근 해야함
  // const number = {
  //   first: 1,
  // };

  // 산술 및 문자표현식 가능
  // const numA = 1;
  // const numB = 2;
  // const strA = "안녕";
  // const strB = "리액트";

  // 논리표현식 가능!
  // const boolA = true;
  // const boolB = false;

  // 닫힘표현식 가능! => 싱글태그인것처럼 표현

  // const num = 19;

  // console.log(props);
  return (
    <div>
      <h1>Body</h1>
      <h2>
        {name}은 {location}에 거주하고 있습니다.
        <br />
        {name}은 {favorList.length}개의 음식을 좋아합니다!
      </h2>
    </div>
    // <div style={{ backgroundColor: "red", color: "white" }}>
    //   {/* <h1> BODY</h1>
    //   <h2>{number.first}</h2>
    //   <h2>{numA}</h2>
    //   <h2>{numA + numB}</h2>
    //   <h2>{strA + strB}</h2>
    //   <h2>{String(boolA || boolB)}</h2> */}

    //   <h1>Body</h1>
    //   <h2>
    //     {num}는 {num % 2 === 0 ? "짝수" : "홀수"}입니다!
    //   </h2>
    // </div>
  );
};
Body.defaultProps = {
  // 근데, api 데이터가 끊기면 대신 나오게 될 기본값
  favorList: [],
};

export default Body;
