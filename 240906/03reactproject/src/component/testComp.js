// import { useState } from "react";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
  }
};

const TestComp = () => {
  // const [count, setCount] = useState(0);
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };
  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  // 상태 변화 촉발 함수 // 밖ㅇ에ㅇ서 쓸 수 있ㅇ음
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        {/* <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button> */}
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>

        <button onClick={() => dispatch({ type: "INIT", data: 1 })}>
          0으로 초기화
        </button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
