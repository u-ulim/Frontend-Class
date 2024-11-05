import { atom } from "recoil";

export interface ToDo {
  id: number;
  text: string;
}

interface ToDoState {
  // [key: string]: string[];
  [key: string]: ToDo[]; // 문자열을 갖고 있는 배열이 아닌, 배열을 갖고 있기 때문에
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    // ToDo: ["포폴준비하기", "리액트복습하기", "자바스크립트공부"],
    // Doing: ["노드JS공부하기"],
    // Done: ["운동하기", "흑백요리사 시청"],
    ToDo: [
      { id: 1, text: "예림 바보" },
      { id: 2, text: "예림 천재" },
      { id: 3, text: "예림이는 코딩 마스터" },
    ],
    Doing: [],
    Done: [],
  },
});
