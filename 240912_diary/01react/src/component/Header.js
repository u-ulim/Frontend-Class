import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #2e2e2e;
  justify-content: space-between;
`;

const LeftChild = styled.div``;
const RightChild = styled.div``;
const Title = styled.div`
  font-size: 25px;
`;

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Wrapper>
      <LeftChild>{leftChild}</LeftChild>
      <Title>{title}</Title>
      <RightChild>{rightChild}</RightChild>
    </Wrapper>
  );
};

export default Header;
