import React from "react";
import styled from "styled-components";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  /* background-color: rgba(0, 0, k 0, 0.5); */
  cursor: pointer;
`;

const Overlay = styled.div`
  /* width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2; */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  width: 100%;
  position: absolute;
  top: 22px;
  font-size: 20px;
  left: 10px;
`;

const Genre = styled.div``;

const InfoGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  /* left: 10px; */
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  gap: 20px;
  align-items: center;
`;

const Vote = styled.span``;

const Adult = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(220, 20, 60, 0.8);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
  /* width: 100%; */
  /* transform: translateX(200px); */
`;

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const safeGenreList = Array.isArray(genreList) ? genreList : [];
  return (
    <Wrapper>
      <Img
        // src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}`}
        src={`https://media.themoviedb.org/t/p/original/${item.backdrop_path}`}
        alt="thumbnail"
      />
      <Title>{item.title}</Title>
      <Adult>{item.adult ? "18세 이상" : "전체"}</Adult>

      <InfoGroup>
        <Genre>
          {/* genre_ids가 배열인지 먼저 확인 */}
          {item.genre_ids &&
            item.genre_ids.map((id, index) => {
              const genre = safeGenreList.find((genre) => genre.id === id);
              // genre가 있을 경우에만 Badge 표시
              return genre ? <Badge key={index}>{genre.name}</Badge> : null;
            })}
        </Genre>
        <Vote>{item.vote_average}</Vote>
      </InfoGroup>
    </Wrapper>
  );
};

export default MovieCard;
