import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createDate }) => {
  console.log(id, isDone, content, createDate);
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      {/* <div className="date_col">{new Date().toDateString()}</div> */}
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
