import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api.ts/api";
import { calcLength } from "framer-motion";
import { makeImagePath } from "./utils";

const Container = styled.div`
  width: 100%;
  height: 3000px;
  margin-top: 60px;
  background: ${(props) => props.theme.black.lighter};
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.red};
`;

interface BgPhoto {
  bgPhoto: string | undefined;
}

const Banner = styled.div<BgPhoto>`
  color: ${(props) => props.theme.white.darker};
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  justify-content: center;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    ${(props) => `url(${props.bgPhoto})`} no-repeat center / cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Box = styled(motion.div)<BgPhoto>`
  width: auto;
  height: 200px;
  background: url(${(props) => props.bgPhoto}) no-repeat center / cover;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVarianst = {
  normal: { scale: 1 },
  hover: { scale: 1.3, y: -20, transition: { delay: 0.3 } },
};

const mockData = [1, 2, 3, 4, 5, 6];

const offset = 6; // 한 페이지당 보여줄 영화 수

const Home = () => {
  // queryKey: ["movies"],

  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (leaving) return; // leaving이 true일 때 리턴하도록 수정
    // setLeaving(true);

    const totalMovies = (data?.results?.length ?? 2) - 2;
    const maxIndex = Math.ceil(totalMovies / offset) - 1;
    toggleLeaving();
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading..</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[18].backdrop_path || "")}
          >
            <Title>{data?.results[18].title}</Title>
            <Overview>{data?.results[18].overview}</Overview>
          </Banner>
          <Slider>
            {/* 애니메이션이 한 번 끝나면 호출되는 함수 */}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      variants={boxVarianst}
                      initial="normal"
                      whileHover="hover"
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path ?? "")}
                      // transition={{ delay: 1 }}
                    >
                      {movie.title}
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Container>
  );
};

export default Home;
