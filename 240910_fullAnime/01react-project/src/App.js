import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MaintitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 270px;
`;

const MainBg = styled.div`
  position: absolute;
  top: -100px;
  width: 100%;
  height: 400px;
  margin-top: -20px;
  background: url("/img/iv-ercy-2_j.webp") center/cover no-repeat;
`;

function App() {
  return (
    <BrowserRouter>
      <MainBg />
      <MaintitleText className="App">Threads</MaintitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
