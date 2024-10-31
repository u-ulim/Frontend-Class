// import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { theme } from "./theme";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";

import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./routes/atoms";

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
  // 기존
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark((prev) => !prev);

  // 리코일을 사용하기 위한 방법
  const isDark = useRecoilValue(isDarkAtom);
  // console.log(isDark);
  // const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />

        {/* <Outlet context={{ isDark, toggleDark }} /> */}
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
