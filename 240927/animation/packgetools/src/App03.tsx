import { animate, motion } from "framer-motion";
import { useRef } from "react";
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

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 30px;
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { borderRadius: "50%" },
  start: {},
  end: {},
};

function App03() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  console.log(biggerBoxRef);
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            // drag="x"
            drag
            dragSnapToOrigin
            dragElastic={3}
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover="hover"
            whileTap="click"
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
}

export default App03;
