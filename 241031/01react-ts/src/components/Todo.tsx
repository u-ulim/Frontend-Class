import React from "react";

import { IToDo } from "../atom";

const Todo = ({ text }: IToDo) => {
  return <div>{text}</div>;
};

export default Todo;
