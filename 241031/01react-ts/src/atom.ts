import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<"TO_DO" | "DOING" | "DONE">({
  key: "category",
  default: "TO_DO",
});
