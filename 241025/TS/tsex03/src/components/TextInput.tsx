import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 8px;
`;

interface Props {
  value: string;
  onChange: (text: string) => void;
}

// 위의 부모에서 꼭 props를 내려조야함
const TextInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default TextInput;
