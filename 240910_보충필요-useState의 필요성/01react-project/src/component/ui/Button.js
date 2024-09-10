import React from "react";
import styled from "styled-components";

const Styledbutton = styled.button`
  padding: 8px 16px;
  margin-bottom: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = ({ title, onClick }) => {
  return <Styledbutton onClick={onClick}>{title || "button"}</Styledbutton>;
};

export default Button;
