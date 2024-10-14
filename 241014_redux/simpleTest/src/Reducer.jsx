import React from "react";

// 항상 상태를 관리하고 변화시킬 때에는 "초기화" 라는 것이 필요함.
// 뭐를 기준으로 얼마나 더할 것인지 뺄 것인지.
let initialState = {
  // 전개연산자 구문 필요!!
  count: 0,
  id: "",
  password: "",
};

const Reducer = (state = initialState, action) => {
  // if (action.type === "INCREMENT") {
  //   // 값을 store로 항상 보내야 하기 때문에 "return" 무조건 필요.
  //   // 아직 if의 반환값이기 때문에 Reducer함수의 반환값을 또 써야한다. 그것은 아래에서
  //   return { ...state, count: state.count + 1 };
  // }

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    // return { ...state, count: state.count - 1 };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      // 값을 반환한다. 맨 마지막에,
      return { ...state };
  }

  // return { ...state };
};

export default Reducer;
