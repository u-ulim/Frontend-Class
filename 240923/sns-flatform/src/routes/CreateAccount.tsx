import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
  width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 타입스크립트에서는 말이 잘 안 되는 경우.
  // type 어디 갔어?
  // const onChange = (e) => {
  //   e.target.value;
  // };
  // 제너릭 / 값을 정의 불가
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    // e.target.value;
    const {
      target: { name, value },
    } = e;

    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  // TS의 목적이 사라짐
  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  // };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || name === "" || email === "" || password === "") return;
    try {
      // create an account
      // set the name of the user
      // redirect to the home page

      // 왜 비동기 처리가 필요한가?
      // => 너 되면, 너 되고, 너 되면 너 되자. 이렇게
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      // setError();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Log into 🚀</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          required
        />
        <Input
          onChange={onChange}
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <Input
          type="submit"
          value={isLoading ? "Loading.." : "create Accout"}
        />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  );
};

export default CreateAccount;
