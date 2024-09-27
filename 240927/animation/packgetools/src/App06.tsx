import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0;
    padding: 0;
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
    color: inherit;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
  },
};

const App06 = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((current) => !current);
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* <Box /> */}
        {/* 사라져버린 컴포넌트에게 어떻게  이벤트를 줄 것인가? */}
        <AnimatePresence>
          {" "}
          {showing ? (
            <Box
              variants={boxVariants}
              initial="inital"
              animate="visible"
              exit="leaving"
            />
          ) : null}
        </AnimatePresence>
        <button onClick={toggleShowing}>Click</button>
      </Wrapper>
    </>
  );
};

export default App06;
