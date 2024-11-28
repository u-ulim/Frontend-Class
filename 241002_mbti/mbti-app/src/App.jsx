import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

//인자값으로 나무의 구조 필요 = 배열 사용
const router = createBrowserRouter([
  {
    // 최상위 요소
    path: "/",
    // Layout를 열겠다는 뜻
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);
const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "SimKyungha";
    /* public에서 가져올 경우 무조건 절대경로 */
    src: url("/fonts/SimKyungha.ttf") format("truetype");
  }
  *{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
  }
  ul,li{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  body{
    font-family:"SimKyungha";
    background:url("https://e1.pxfuel.com/desktop-wallpaper/986/994/desktop-wallpaper-funny-cat-computer-cats.jpg") center/cover no-repeat;
    /* width:100%; */
    height:100vh;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
