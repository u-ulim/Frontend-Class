import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #2e2e2e;
  justify-content: space-between;
`;

const LeftChildContainer = styled.div``;
const RightChildContainer = styled.div``;
const TitleContainer = styled.div``;

const Header = ({ LeftChild, Title, RightChild }) => {
  return (
    <Wrapper>
      <LeftChildContainer>{LeftChild}</LeftChildContainer>
      <TitleContainer>{Title || "header"}</TitleContainer>
      <RightChildContainer>{RightChild}</RightChildContainer>
    </Wrapper>
  );
};

export default Header;
