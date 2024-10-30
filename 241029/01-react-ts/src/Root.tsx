import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { theme } from "./theme";
import { darktheme, ligththeme } from "./theme";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
*{
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
  font-family: "Source Sans 3", sans-serif;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor}  
}`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={ligththeme}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </ThemeProvider>
    </>
  );
};

export default App;
