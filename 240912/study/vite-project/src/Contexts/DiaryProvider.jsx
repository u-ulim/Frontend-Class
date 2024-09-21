import React, { createContext, useReducer, useEffect, useState } from "react";

// data 받아오기
const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
  {
    id: "mock4",
    date: new Date(2024, 7, 15).getTime(), // 2024년 8월 15일로 설정
    content: "mock4 - 8월 데이터",
    emotionId: 3,
  },
];

export const DiaryDataContext = createContext();
export const DiaryDispatchContext = createContext();

// reducer로 함수 전역관리
const diaryReducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
};

const DiaryProvider = ({ children }) => {
  const [data, dispatch] = useReducer(diaryReducer, []); // 빈 배열인 이유는 초기화 상태이기 때문에,

  // dispatch 함수들을 정의
  // 01. 처음에 data를 설정해준다.
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
  }, []);

  // 02. create 함수
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content: content,
        // 축약가능
        emotionId: emotionId,
      },
    });
    idRef.current += 1;
  };

  // 03. update 함수
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content: content,
        emotionId: emotionId,
      },
    });
  };

  // 03. delete 함수
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <DiaryDataContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
        {children}
      </DiaryDispatchContext.Provider>
    </DiaryDataContext.Provider>
  );
};

export default DiaryProvider;
