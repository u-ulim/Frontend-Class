import React, { useState } from "react";
import styled from "styled-components";

import ToDoItem from "./components/ToDoItem";
import DataView from "./components/DataView";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  justify-content: center;
`;

const TextInput = styled.input`
  font-size: 18px;
  padding: 8px;
`;

const mockData = [
  "Typescript 복습하기",
  "Next.js 예습하기",
  "Node.js 공부하기",
];

const App = () => {
  const [toDoList, setToDoList] = useState(mockData);
  const [toDo, setToDo] = useState("");
  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput onChange={(e) => setToDo(e.target.value)} value={toDo} />
    </Container>
  );
};

export default App;
