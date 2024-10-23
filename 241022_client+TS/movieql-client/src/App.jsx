import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Movies from "./Movies";
import Movie from "./Movie";

const GlobalStyles = createGlobalStyle`
  ${reset}

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
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Movies /> }, // 기본 경로에서 영화 목록을 보여줌
      { path: "movies/:id", element: <Movie /> }, // 특정 영화의 상세 정보를 보여줌
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
