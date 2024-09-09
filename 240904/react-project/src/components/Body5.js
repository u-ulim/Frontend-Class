import React from "react";
import { useState, useRef } from "react";

const Body5 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  console.log(textRef);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = (e) => {
    if (text.length < 5) textRef.current.focus();
    else {
      alert(text);
      textRef.current.value = "";
    }
  };
  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
};

export default Body5;
