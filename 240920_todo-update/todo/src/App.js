import "./App.css";
import React, { useReducer, useRef, useCallback, useState } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Javascript 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createdDate: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  /* example */
  const newItem = [];
  const [examState, setExamState] = useState("");

  const examCreate = () => {
    setExamState([newItem, ...examState]);
  };

  const examCreate2 = useCallback(() => {
    setExamState([newItem, ...examState]);
  }, [examState]);
  // => state값이 변경 될 때 계속 렌더링이 되니, 이것은 모순적이다.
  // => 그렇다면 실제로 이 함수만 사용이 될 때에만 사용을 하자 그것이 바로 [] 아무것도 넣지 않는 거.
  // => 그치만 진짜 todo가 변경이 된 상태에서는 작동이 되질 않는다.
  // => 이럴 때 함수형으로 업데이트 시킨다 라고 한다.

  const examCreate3 = useCallback(() => {
    setExamState((examState) => [newItem, ...examState]);
  }, []);

  // 불필요한 rerendering을 방지하고자 useCallback을 사용하고,
  // 의존성 배열을 빈배열로 설정하는 경우, state의 최신값을 받아오지 못하는 에러가 발생
  // 함수형 업데이트 형태로 state의 최신값을 항상 받아올 수 있도록 해야함

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []); // 빈 배열로 넣게 되면? onUpdate가 실행 될 때만

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []); // 빈 배열로 넣게 되면? onDelete가 실행 될 때만

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
