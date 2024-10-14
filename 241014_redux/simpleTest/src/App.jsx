import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Box from "./Box";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increase = () => {
    // reducer, redux도 그렇고 action의 값은 객체이다.
    // 그렇다면, 타입이 필요하겠네?
    dispatch({ type: "INCREMENT", payload: { num: 5 } }); // 이 값을 기반으로 무언갈 해라. (payload) => 객체
    // 토스할 때 값도 하나 넣을 수 있다. payload
  };

  const decrease = () => {
    // reducer, redux도 그렇고 action의 값은 객체이다.
    // 그렇다면, 타입이 필요하겠네?
    dispatch({ type: "DECREMENT", payload: { num: 1 } }); // 이 값을 기반으로 무언갈 해라. (payload) => 객체
    // 토스할 때 값도 하나 넣을 수 있다. payload
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "DK", password: "1234" } });
  };
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  return (
    <Wrapper>
      <h1>{count}</h1>

      <ButtonGroup>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </ButtonGroup>

      <Box />
      <div>{id}</div>
      <div>{password}</div>
      {/* {(id, password)} */}
      <button onClick={login}>로그인</button>
    </Wrapper>
  );
}

export default App;
