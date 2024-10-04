// import './App.css';
// import styled from 'styled-components';

// const baseShadow = `box-shadow: 0 10px 6px #777
// `

// const Container = styled.div`
// font-size: 2rem;
// width: 50%;
// background: #ccc;
// margin: 0 auto;
// padding: 10px 20px;
// ${baseShadow}
// `

// function App() {
//   return (
//     <div className="App">
//       <Container>ContainerContainerContainer</Container>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colorTheme.fontSecoundalry};
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colorTheme.fontPrimary};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Wrapper>
          <SearchButton>Button</SearchButton>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
