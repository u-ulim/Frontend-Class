import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
// import SimKyungha from "./fonts/SimKyungha.ttf";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/", // 루트 경로로 변경
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

// => 두 가지의 방법
  /* @font-face {
    font-family: "SimKyungha";
    src: url();
  } */
    @font-face {
      font-family: "SimKyungha";
      src: url("/fonts/SimKyungha.ttf") format("truetype");
    }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background: url("https://img.animalplanet.co.kr/news/2020/02/29/700/zmr9hz7k1x63x25hp4fc.jpg") center/cover no-repeat;
    font-family: "SimKyungha";
    height: 100vh;
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
