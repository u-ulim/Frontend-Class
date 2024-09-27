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
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  background: #fff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  // 해당 원 안의 요소들이 각각 중간에 위치하게끔
  place-self: center;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 5,
      type: "spring",
      bounce: 0.5,
      delay: 0.5,
      staggerChildren: 0.3, //  순차적으로 값을 주겠다!
      delayChildren: 0.5,
    },
  },
};

const circleVariants = {
  start: {
    scale: 0,
    opacity: 0,
    y: 90,
  },
  end: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 5,
      type: "spring",
      bounce: 0.5,
      // delay: 1.5,
    },
  },
};

function App01() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Box variants={boxVariants} initial="start" animate="end">
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
        </Box>
      </Wrapper>
    </>
  );
}

export default App01;
