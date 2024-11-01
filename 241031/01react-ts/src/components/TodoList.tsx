import React, { useState } from "react";
import styled from "styled-components";
import { set, useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

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

interface ToDo {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
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
  const [value, modFn] = useRecoilState(toDoState);

  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TODO" },
      ...oldToDos,
    ]);
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
            required: "할 일을 입력해주세요",
          })}
          type="text"
          placeholder="할 일을 입력하세요..."
        />
        <input type="submit" value={"추가"} />
      </Form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
