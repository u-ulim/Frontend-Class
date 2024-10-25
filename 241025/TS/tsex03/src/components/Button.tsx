import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 15px;
  background: rgba(255, 86, 34, 1);
  color: #fff;
  padding: 8px 15px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 86, 34, 0.8);
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
