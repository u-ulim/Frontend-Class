import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.span`
  font-size: 22px;
`;

const LoadingScreen = () => {
  return (
    <Wrapper>
      <Text>Loading..</Text>
    </Wrapper>
  );
};

export default LoadingScreen;
