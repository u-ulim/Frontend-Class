import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState, toDoSelector, categoryState, Categories } from "../atoms";
import { IToDo } from "../atoms";

import ToDo from "./ToDo";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgrey;
`;

interface Form {
  toDo: string;
}

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector); // 이 줄로 교체
  const [category, setCategory] = useRecoilState(categoryState);
  // const {} = useRecoilValue(toDoSelector);
  // const [category, setCategory] = useRecoilState(categoryState);

  // const toDos = useRecoilValue(toDoSelector);

  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  // const selectorOutPut = useRecoilValue(toDoSelector);
  // console.log(selectorOutPut);
  // console.log(toDos);

  return (
    <Container>
      <Title>ToDo List</Title>
      <select value={category} onInput={onInput}>
        <option value="TODO">{Categories.TODO}</option>
        <option value="DOING">{Categories.DOING}</option>
        <option value="DONE">{Categories.DONE}</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDoItem) => (
        <ToDo key={toDoItem.id} {...toDoItem} />
      ))}

      {/* {category === "TODO" &&
        todo.map((toDoItem: IToDo) => <ToDo key={toDoItem.id} {...toDoItem} />)}
      {category === "DOING" &&
        doing.map((toDoItem: IToDo) => (
          <ToDo key={toDoItem.id} {...toDoItem} />
        ))}
      {category === "DONE" &&
        done.map((toDoItem: IToDo) => <ToDo key={toDoItem.id} {...toDoItem} />)} */}
    </Container>
  );
};

export default ToDoList;
