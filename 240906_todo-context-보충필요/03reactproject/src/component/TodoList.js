import React, { useState, useEffect, useMemo } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete, createDate }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  // useEffect(() => {
  //   const analyzeTodo = () => {
  //     console.log("analyzeTodo 함수 호출");
  //     const totalCount = todo.length;
  //     const doneCount = todo.filter((it) => it.isDone).length;
  //     const notDoneCount = totalCount - doneCount;
  //     return {
  //       totalCount,
  //       doneCount,
  //       notDoneCount,
  //     };

  //   };

  //   const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  //   analyzeTodo();

  // }, []);

  // const analyzeTodo = () => {
  //   console.log("analyzeTodo 함수 호출");
  //   const totalCount = todo.length;
  //   const doneCount = todo.filter((it) => it.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };
  // const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  // analyzeTodo();

  // useMemo를 이용한,,,
  const analyzeTodo = useMemo(() => {
    // console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div>
      <h4>Todo List</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 일 : {notDoneCount} </div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list-wrapper">
        {/* {todo.map((it) => (
          <TodoItem key={it.id} {...it}></TodoItem>
        ))} */}
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
            createDate={createDate}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
