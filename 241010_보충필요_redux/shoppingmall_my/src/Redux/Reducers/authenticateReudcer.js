import { useSyncExternalStore } from "react";

let initialState = {
  id: "",
  pw: "",
  authenticate: false,
};

const authenticateReducer = (state, action) => {
  console.log(action);
};

export default authenticateReducer;

// reducer의 기본 설정
// let initialState = {};

// const authenticateReducer = () => {

// }

// export default authenticateReducer
