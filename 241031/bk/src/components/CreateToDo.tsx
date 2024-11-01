import { useForm } from "react-hook-form";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms"; // atoms -> atom
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  toDo: string;
}

const CreateToDo = () => {
  // => useRecoilState는 현재 쓰이고 있지 않다.
  // const [toDos, setToDos] = useRecoilState(toDoState);

  // useSetRecoilState => 편집전용이다.
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<Form>({});
  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      //   { id: Date.now(), text: toDo, category: "TODO" },
      //   ...oldToDos,
      // ]);
      // category가 값이 같다면, 생략 가능이었는데?
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please Wirte a ToDo!",
        })}
        type="text"
        placeholder="Write a ToDo!"
      />
      <input type="submit" value={"ADD"} />
    </Form>
  );
};

export default CreateToDo;
