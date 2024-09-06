import React, { useState, useRef } from "react";
import "./TodoList.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <div className="editor_wrapper">
        <input
          value={content}
          ref={inputRef}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 ToDo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
