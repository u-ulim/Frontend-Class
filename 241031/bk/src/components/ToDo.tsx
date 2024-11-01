import React from "react";
import styled from "styled-components";
import { IToDo, toDoState, Categories } from "../atoms";
import { useSetRecoilState } from "recoil";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;

// [
//   {
//     id: 1730427235174,
//     text: "ㅇㅇㅇ",
//     category: "TODO",
//   },
//   {
//     id: 1730427233714,
//     text: "ㄷ ㄷ ㄷ ",
//     category: "TODO",
//   },
//   {
//     id: 1730426610925,
//     text: "ㄴㅣㅏ",
//     category: "TODO",
//   },
//   {
//     id: 1730426325398,
//     text: "아아아",
//     category: "TODO",
//   },
// ];

// gam의 값을 mango로 교체
const fruits = ["apple", "gam", "banana", "orange"];
// const front = ["apple"];
// const back = ["banana", "orange"];
// const final = [...front, "mango", ...back];
// // 중첩배열을 조심하기

const target = 1;
// const front = fruits.slice(0, 1); // 이것은 apple을 가져온다.
// const back = fruits.slice(target + 1);
const final = [
  ...fruits.slice(0, target),
  "mango",
  ...fruits.slice(target + 1),
];

const ToDo = ({ text, category, id }: IToDo) => {
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log("I wanna change to", newCategory);
  // };
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;

    setToDos((oldToDos) => {
      // const oldToDo = oldToDos[targetIndex];
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newTodo = { text, id, category: name as any };
      // console.log(oldToDo, newTodo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <Container>
      <span>{text}</span>
      <ButtonGroup>
        {category !== Categories.TODO && (
          <Button name={Categories.TODO} onClick={onClick}>
            Todo
          </Button>
        )}
        {category !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default ToDo;
