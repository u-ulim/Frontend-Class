import React from "react";
import "./Header.css";

const Header = () => {
  console.log("HEADER UPPDATE");
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// 헤더는 고차 컴포넌트가 되었다.
export default React.memo(Header);
