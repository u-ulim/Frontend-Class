import React from "react";

import { createGlobalStyle } from "styled-components";

import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0; 
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
ul, li {
  list-style: none;
  
}
a {
  text-decoration: none;
  color: inherit;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoList />
      <div>App</div>
    </>
  );
};

export default App;
