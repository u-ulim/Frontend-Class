// import { useRef, useEffect, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   useScroll,
//   AnimatePresence,
// } from "framer-motion";
// import { createGlobalStyle, styled } from "styled-components";
// import reset from "styled-reset";

// const GlobalStyles = createGlobalStyle`
//   ${reset};

//   @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: "Source Sans 3", sans-serif;
//     background: linear-gradient(135deg, #4b64ee, #44d4f8)
//   }

//   ul, li {
//     list-style: none;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//   }
// `;

// const Wrapper = styled(motion.div)`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 20px;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 380px;
//   /* display: none; */
// `;

// const Button = styled.button`
//   position: absolute;
//   bottom: 300px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 10px;
// `;

// const box = {
//   initial: {
//     x: 500,
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//   },
//   exits: {
//     x: -500,
//     opacity: 0,
//     scale: 0,
//   },
// };

// const BoxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const App07 = () => {
//   const [visible, setVisible] = useState(1);
//   const nextPlease = () => {
//     setVisible((current) => (current === BoxArray.length ? 1 : current + 1));
//   };
//   const prevPlease = () => {
//     setVisible((current) => (current === 1 ? 10 : current - 1));
//   };
//   return (
//     <>
//       <GlobalStyles />
//       <Wrapper>
//         <AnimatePresence>
//           {BoxArray.map((i) =>
//             i === visible ? (
//               <Box
//                 variants={box}
//                 initial="inital"
//                 animate="visible"
//                 exit="exits"
//                 key={i}
//               >
//                 {i}
//               </Box>
//             ) : null
//           )}
//         </AnimatePresence>
//         <Button onClick={nextPlease}>next</Button>
//         {/* <Button onClick={prevPlease}>prev</Button> */}
//       </Wrapper>
//     </>
//   );
// };

// export default App07;

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
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 300px;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const box = {
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
  }),
};

const App07 = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === boxArray.length ? 1 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AnimatePresence mode="wait" custom={back}>
          {boxArray.map((i) =>
            i === visible ? (
              <Box
                custom={back}
                variants={box}
                initial="initial"
                animate="visible"
                exit="exits"
                key={visible}
              >
                {visible}
              </Box>
            ) : null
          )}
        </AnimatePresence>
        <Buttons>
          <Button onClick={prevPlease}>PREV</Button>
          <Button onClick={nextPlease}>NEXT</Button>
        </Buttons>
      </Wrapper>
    </>
  );
};
export default App07;
