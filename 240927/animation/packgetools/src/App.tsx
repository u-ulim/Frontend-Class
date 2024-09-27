import { animate, motion } from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #4b64ee, #44d4f8)
  }


  ul, li {
    list-style: none;

  }
  a {
    text-decoration: none;
    color: inherit
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* <Box /> */}
        {/* <motion.div animate={{ x: 100 }}></motion.div> */}
        {/* <Box
          transition={{ duration: 1 }}
          animate={{ borderRadius: "100px" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        /> */}
        {/* <Box
          // transition={{ duration: 3 }}
          // transition={{ duration: 10, type: "spring", damping: 1 }}
          transition={{ duration: 10, type: "spring", mass: 1000, delay: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 30 }}
        /> */}
        <Box variants={myVars} initial="start" animate="end" />
      </Wrapper>
    </>
  );
}

export default App;
