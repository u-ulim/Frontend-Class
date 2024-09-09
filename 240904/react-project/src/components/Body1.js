import React from "react";
// react라는 라이브러리
import { useState } from "react";

const Body1 = () => {
  // const handleOnClick = (e) => {
  //   console.log(e);
  // };

  // 문법체계 usestate(0) 0은 초기값
  // state에 초기값이 들어가고, setState는 함수다.
  // setState는 state를 업데이트
  // const [state, setState] = useState(0);
  // const [count, setCount] = useState(0);

  // const onIcrease = () => {
  //   setCount(count + 1);
  // };
  // const [text, setText] = useState("");

  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };
  // const [date, setDate] = useState("");
  // const handleOnChange = (e) => {
  //   setDate(e.target.value);
  //   console.log(e.target.value);
  // };
  // const [option, setOption] = useState("");
  // const handleOnChange = (e) => {
  //   console.log("변경된 값 ", e.target.value);
  //   setOption(e.target.value);
  // };
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log("변경된 값", e.target.value);
  };
  return (
    <div>
      <textarea onchange={handleOnChange} value={text} />
      {/* <select onChange={handleOnChange} value={option}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select> */}
      {/* <input type="date" value={date} onChange={handleOnChange} /> */}

      {/* <input onChange={handleOnChange} />
      <div>{text}</div> */}

      {/* <h2>{count}</h2>
      <button onClick={onIcrease}>+</button> */}

      {/* <button name="A버튼" onClick={handleOnClick}>
        A버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B버튼
      </button> */}
    </div>
  );
};

export default Body1;
