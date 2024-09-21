import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import DiaryProvider from "./Contexts/DiaryProvider";

import GlobalStyles from "./styles/GlobalStyles.styles";
import "./index.css";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

createRoot(document.getElementById("root")).render(
  <DiaryProvider>
    <GlobalStyles />
    <Wrapper>
      <RouterProvider router={router}></RouterProvider>
    </Wrapper>
  </DiaryProvider>
);
