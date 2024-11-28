import React from "react";
import styled from "styled-components";

// const ButtonItem = styled.button`
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   font-size: 30px;
//   cursor: pointer;
//   font-family: "Nanum Pen Script", cursive;
//   ${({ type }) =>
//     type === "positive"
//       ? `background: #000000; color: #fff;`
//       : `background: #ccc; color: #000`};
//   ${({ type }) =>
//     type === "negative"
//       ? `background: #fd565f; color: #fff;`
//       : `background: #ccc; color: #000`};
// `;

const ButtonItem = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 30px;
  cursor: pointer;
  font-family: "Nanum Pen Script", cursive;
  /* 기본값 설정 */
  background: #ccc;
  color: #fff;

  // 중복 삼항조건연산자도 있음

  /* positive 타입 */
  ${({ type }) =>
    type === "positive" &&
    `
    background: skyblue; 
    color: #fff;
  `};

  /* negative 타입 */
  ${({ type }) =>
    type === "negative" &&
    `
    background: #fd565f; 
    color: #fff;
  `};
`;

const Button = ({ title, type, onClick }) => {
  return (
    <ButtonItem type={type} onClick={onClick}>
      {title || "button"}
    </ButtonItem>
  );
};

export default Button;
