import React, { useState } from "react";
import styled from "styled-components";
import ToDoItem from "./components/ToDoItem";
import DataView from "./components/DataView";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  justify-content: center;
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

  const onAdd = () => {
    setToDoList([toDo, ...toDoList]);
    setToDo("");
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo} />
      <Button label={"추가"} color="#304ffe" onClick={onAdd} />
    </Container>
  );
};

export default App;
