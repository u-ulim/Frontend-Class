import React from "react";

const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <div className="editor_wrapper">
        <input placeholder="새라운 ToDo..." />
        <button>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
