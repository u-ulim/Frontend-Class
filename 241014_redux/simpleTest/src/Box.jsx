import React from "react";
import { useSelector } from "react-redux";

const Box = () => {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  return <div>This is Box{count}</div>;
};

export default Box;
