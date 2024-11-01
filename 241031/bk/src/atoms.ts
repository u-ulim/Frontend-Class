import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

// type categories = "TODO" | "DOING" | "DONE";

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

// 와씨 타입스크립트 어렵다잉
export const categoryState = atom<Categories>({
  key: "category",
  // default: "TODO",
  default: Categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

// export const toDoSelector = selector({
//   key: "toDoSelector",
//   get: ({ get }) => {
//     const toDos = get(toDoState);
//     const category = get(categoryState);

//     if (category === "TODO") {
//       return toDos.filter((toDo) => toDo.category === "TODO");
//     }
//     if (category === "DOING") {
//       return toDos.filter((toDo) => toDo.category === "DOING"); // 쉼표 제거
//     }
//     if (category === "DONE") {
//       return toDos.filter((toDo) => toDo.category === "DONE"); // 세미콜론 추가
//     }
//   },
// });

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
