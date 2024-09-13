import React from "react";
import "./Button1.css";

const Button1 = ({ type, title }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button className={["Button", `Button_${btnType}`].join(" ")}>
      {title}
    </button>
  );
};

export default Button1;
