import React, {
  useReducer,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import GlobalStyles from "./styles/GlobalStyles.styles";

const Wrapper = styled.div`
  padding: 20px;
`;

const reducer = (state, action) => {
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

// state만 따로 모아서 간다. 성격()
export const DiaryStateContext = React.createContext();

// 함수만 따로 모아서 가도록 한다. 성격()
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

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

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다!</div>;
  } else {
    return (
      <div className="App">
        {/* EMOTION */}
        {/* <img src={emotion1}></img>
        <img src="/emotion/emotion1.png"></img>
        <img src={"/emotion/emotion1.png"}></img> */}
        {/* <img src={`${process.env.PUBLIC_URL}/emotion/emotion1.png`}></img> */}
        <GlobalStyles />
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                {/* 동적 아이디 생성으로 인한 /diary/ 없음*/}
                {/* <Route path="/diary/" element={<Diary />} /> */}
                <Route path="/edit/:id" element={<Edit />} />
              </Routes>
              {/* <div>
            <Link to={"/"}>HOME</Link>
            <br></br>
            <Link to={"/new"}>NEW</Link>
            <br></br>
            <Link to={"/diary"}>DIARY</Link>
            <br></br>
            <Link to={"/edit"}>EDIT</Link>
          </div> */}
            </Wrapper>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </div>
    );
  }
};

export default App;
