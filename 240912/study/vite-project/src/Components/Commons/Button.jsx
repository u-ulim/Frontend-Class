import React from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 22px;
  cursor: pointer;
  /* font-family: "Nanum Pen Script", cursive; */
  /* 기본값 설정 */
  background: #ccc;
  color: #fff;

  // 중복 삼항조건연산자도 있음
  /* ${({ type }) =>
    type === "positive" &&
    `
    background: skyblue; 
    color: #fff;
  `};

  ${({ type }) =>
    type === "negative" &&
    `
    background: #fd565f; 
    color: #fff;
  `}; */

  /* 타입에 따른 배경색과 글자색 처리 */
  background: ${({ type }) =>
    type === "positive"
      ? "skyblue"
      : type === "negative"
      ? "#fd565f"
      : "inherit"};
  color: ${({ type }) =>
    type === "positive" || type === "negative" ? "#fff" : "inherit"};
`;

const Button = ({ onClick, text, type }) => {
  return (
    <ButtonItem type={type} onClick={onClick}>
      {text || "Button"}
    </ButtonItem>
  );
};

export default Button;
