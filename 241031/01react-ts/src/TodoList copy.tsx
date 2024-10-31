import React, { useState } from "react";
import styled from "styled-components";
import { set, useForm } from "react-hook-form";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100px;
`;

interface IUserForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  passWord1: string;
  passWord2: string;
  extraError?: string;
}

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

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IUserForm>({
    defaultValues: {
      // email: "@naver.com",
      // firstName: "Jung",
      // lastName: "Jung",
      // userName: "Jung",
      // passWord1: "Jung",
      // passWord2: "Jung",
    },
  });
  // console.log(register("todo"));
  // console.log(watch());

  const onValid = (data: IUserForm) => {
    if (data.passWord1 !== data.passWord2) {
      setError(
        "passWord2",
        { message: "Password are not same" },
        { shouldFocus: true }
      );
    }
    setValue("username", "");
    // => 이거는 무조건 오류가 나온다.
    // setError("extraError", { message: "Server Error" });
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
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "Email is required", // 필수 필드 에러 메시지
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/, // 네이버 이메일 형식만 허용
              message: "Only naver.com emails allowed", // 형식 에러 메시지
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", {
            required: "Write Here",
            // 다시 공부할 필요가 있다.
            validate: (value) =>
              value.includes("test") ? "No Test allowed" : true,
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message as string}</span>

        <input
          {...register("username", { required: true, minLength: 10 })}
          type="text"
          placeholder="User Name"
        />
        <span>{errors?.username?.message as string}</span>

        <input
          {...register("passWord1", {
            required: "Password is required..",
            minLength: {
              value: 5,
              message: "Your Password is too short...",
            },
          })}
          type="password"
          placeholder="Password1"
        />
        <span>{errors?.passWord1?.message as string}</span>

        <input
          {...register("passWord2", { required: true, minLength: 5 })}
          type="password"
          placeholder="Password2"
        />
        <span>{errors?.passWord2?.message as string}</span>

        <input type="submit" value={"ADD"} />
        <span>{errors?.extraError?.message as string}</span>
      </Form>
    </Container>
  );
};

export default TodoList;
