import React, { useState } from "react";
import styled from "styled-components";
import { set, useForm } from "react-hook-form";
import { atom } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 100px;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100px;
`;

interface Form {
  toDo: string;
}

const toDoState = atom({
  key: "toDo",
  default: [],
});
const TodoList = () => {
  // => 기존에 하는 것 .
  // const [todo, setTodo] = useState("");
  // const [toDoError, setTodoError] = useState("");
  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (todo.length < 10) {
  //     return setTodoError("Todo should be longer.");
  //   }
  //   console.log(todo);
  // };

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setTodoError("");
  //   setTodo(value);
  // };

  // console.log(register("todo"));
  // console.log(watch());
  const { register, handleSubmit, setValue } = useForm<Form>({});

  const handleValid = () => {
    setValue("toDo", "");
  };

  return (
    // => 기존에 하는 것 .
    // <Container>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       onChange={onChange}
    //       type="text"
    //       value={todo}
    //       placeholder="Write Todo"
    //     />
    //     <input type="submit" value={400} />
    //     {toDoError ? <ispan>{toDoError}</ispan> : null}
    //   </form>
    // </Container>
    <Container>
      <Title>ToDo List</Title>
      <hr />
      <Form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please Write a Todo..", // 필수 필드 에러 메시지
          })}
          type="text"
          placeholder="Write a ToDo.."
        />

        <input type="submit" value={"ADD"} />
      </Form>
      <ul>
        <li>리액트</li>
        <li>스타벅스 가서 커피한잔</li>
      </ul>
    </Container>
  );
};

export default TodoList;
