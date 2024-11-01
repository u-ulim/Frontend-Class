import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import App from "./App";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
