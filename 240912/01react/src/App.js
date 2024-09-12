import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <div className="App">
      {/* EMOTION */}
      {/* <img src={emotion1}></img>
      <img src="/emotion/emotion1.png"></img>
      <img src={"/emotion/emotion1.png"}></img> */}
      {/* <img src={`${process.env.PUBLIC_URL}/emotion/emotion1.png`}></img> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        <div>
          <Link to={"/"}>HOME</Link>
          <br></br>
          <Link to={"/new"}>NEW</Link>
          <br></br>
          <Link to={"/diary"}>DIARY</Link>
          <br></br>
          <Link to={"/edit"}>EDIT</Link>
        </div>
      </div>
    </div>
  );
};

export default App;
