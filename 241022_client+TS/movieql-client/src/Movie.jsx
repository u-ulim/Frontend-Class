import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20vw;
`;

const Title = styled.div`
  font-size: 60px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 35px;
  margin: 15px 0 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 22px;
  line-height: 30px;
`;
const Image = styled.div`
  flex: 1;
  width: 100%;
  height: 700px;
  background: url(${(props) => props.bg}) center top/cover no-repeat;
  border-radius: 6px;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      isLiked @client
    }
  }
`;

// @client => Cache에서만 작동을 하는,
// 전문용어로 무엇이라고 부르냐면, local only field data
// 오직 로컬에서만 움직인다.

const Movie = () => {
  const { id } = useParams(); // URL에서 영화의 id를 받아옵니다.
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id, // movieId에 URL에서 받아온 id를 전달합니다.
    },
  });

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data.movie.title}</Title>
          <Subtitle>{data.movie.rating}</Subtitle>
          <Button onClick={onClick}>
            🐾{data.movie.isLiked ? "Unlike" : "Like"}
          </Button>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            mollitia repudiandae facere enim non maiores maxime libero sequi vel
            expedita aliquid est animi alias facilis assumenda, impedit at
            officia voluptatibus. Quaerat, facere illo, provident vitae eligendi
            ab suscipit sit minus commodi consequatur perferendis explicabo,
            harum corporis iure maiores odio aspernatur consectetur? Vero
            eligendi minus officia fugit atque aliquam. Dolorum, libero.
          </Description>
        </Column>
        <Image bg={data.movie.medium_cover_image} />
      </ItemGroup>
    </Container>
  );
};

export default Movie;
