import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // useRef는 값을 담을 수 있음
  const didMountRef = useRef(false);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  // 두 개의 인자값에 들어오는 것들이 계속 업데이트 되는
  // useEffect(() => {
  //   console.log("count 업데이트 : ", count, text);
  // }, [count, text]);

  // 가상돔에서 움직임, 원본데이터가 있고, 가상돔에서 한 번 업데이트를 해야 기존 돔에 업데이트 가능
  // React에서는 콘솔 창을 100% 신뢰 하지 말 것,
  // useEffect에서는 두 개의 인자 값을 받는다. 두번째 인자값이 업데이트 될 때 마다, 첫번 째 인자 콜백 함수가 실행이 된다.
  // useEffect(() => {
  //   console.log("count 업데이트: ", count);
  // }, []);

  // 1) useEffect 기능
  // 기본기능 : 의존성 배열에 입력된 state의 값이 업데이트가 되면, 콜백함수를 실행시킨다.
  // ex) 넷플릭스 사이트를 만들었는데, 최초에는 API데이터를 굳이 가져올 필요가 없는 상황 => 영화 썸네일을 클릭할 때에만 모달페이지를 만들면서 동시에 영화 API데이터를 찾아와야하는 상황

  // 2) 컴포넌트가 실행되자마자 무조건 실행 기능!
  // => ex) 넷플릭스 사이트를 만들었는데, 상단 슬라이드 => API 데이터를 활용해서 무조건 생성 상황

  // 어떠한 값도 정의가 되거나 조건이 없다면, 무조건 실행이 된다. 컴포넌트의 사소한 어떤 업데이트가 생기기만 해도 즉각적으로 실행, useEffect에 의존성 배열이 존재하지 않는 경우, 컴포넌트 안에 있는 값을 렌더링 할 때 마다 무조건 실행

  // useEffect(() => {
  //   console.log("컴포넌트 무조건 업데이트!");
  // });

  // 컴포넌트 안에 있는 요소들을 렌더링할 때만 실행, 최초에 컴포넌트가 마운트되는 시점 x =>
  // 비동기처리 방식으로 A데이터 먼저 실행, B데이터 나중ㅇ에 실행

  // const didMountRef = useRef(false);
  // 이 구문자체가, 값이 변경 될 때만 실행을 하겠다.

  // 컴포넌트가 마운트 되는 시점에 딱 1번만 실행
  // useEffect() 함수 내 의존성 배열 안에 있는 값이 존재하지 않는 경우!
  // useRef(false) => boolean 값을 활용

  useEffect(() => {
    if (!didMountRef.current) didMountRef.current = true;
    else console.log("컴포넌트 업데이트!");
  });

  useEffect(() => {
    console.log("컴포넌트 마운트!");
  });

  // useEffect(() => {
  //   // 종료가 되지 않아서 계속 실행이 되는
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   // 컴포넌트가 언마운트 되는 경우,
  //   // 기존에 컴포넌트가 마운트된 ㅇ이후에 실행하고 있던 어떤 작업이 종료가 되었다는 것을 의미!
  //   // 자연스럽게 언마운트의 단계 // 의도적으로 언마운트의 단계 => 기존 작업은 종료가 된다.
  //   // 기존 작업을 종료시키는 명칭을 클린업이라고 한다.

  //   // 종결하겠다. 컴포넌트가 종료된 이후에
  //   // 리액트에서는 컴포넌트의 생애주기!!
  //   // 브라우저가 컴포넌트 파싱하는 순간: 마운트
  //   // UI 내 state(상태) 변화가 업데이트 되면 렌더링을 한다.  : 렌더링
  //   // 컴포넌트가 언마운트가 되려면: 클린업
  //   // 더이상 컴포넌트를 사용하지 않는 순간: 언마운트

  //   return () => {
  //     console.log("클린업");
  //     clearInterval(intervalID);
  //   };

  // });

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  // **************이것을 참고할 것 **************
  // const didMountRef = useRef(false); // 초기값을 false로 설정

  // useEffect(() => {
  //   if (!didMountRef.current) {
  //     // 처음 렌더링된 경우 (마운트된 경우)
  //     didMountRef.current = true; // 값 업데이트
  //   } else {
  //     // 업데이트된 경우 (두 번째 렌더링 이후)
  //     console.log("컴포넌트 업데이트!");
  //   }
  // });

  // 단락 회로 평가?
  // 좌항이 참ㅇ인 경우에만 우항이 실행
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input text={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
