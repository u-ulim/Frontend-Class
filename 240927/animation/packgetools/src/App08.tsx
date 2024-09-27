import { useRef, useEffect, useState } from "react";
import {
  motion,
  delay,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { style } from "framer-motion/client";
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
  gap: 200px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #ff1aff;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const App08 = () => {
  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper onClick={toggleClicked}>
        {/* <Box
          style={{
            justifyContent: clicked ? "center" : "flex-start",
            alignItems: clicked ? "center" : "flex-end",
          }}
        >

          <Circle />
        </Box> */}
        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box>
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 0 }} />
          ) : null}
        </Box>
      </Wrapper>
    </>
  );
};
export default App08;
