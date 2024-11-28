// import React, { useState, useEffect } from "react";
// import { useApolloClient, gql } from "@apollo/client";

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const client = useApolloClient();
//   useEffect(() => {
//     client
//       .query({
//         query: gql`
//           {
//             allMovies {
//               title
//             }
//           }
//         `,
//       })
//       // .then((results) => console.log(results));
//       .then((results) => setMovies(results.data.allMovies));
//   }, [client]);
//   // console.log(client);
//   return (
//     <ul>
//       {movies.map((movie) => (
//         <li key={movie.id}>{movie.title}</li>
//       ))}
//     </ul>
//   );
// };

// export default Movies;

import React, { useState, useEffect } from "react";
import { useApolloClient, gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  width: 100%;
  height: 45vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Loading = styled.div`
  font-size: 1px;
  text-align: center;
  width: 100%;
  margin-top: 20vh;
`;
const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 60vw;
  margin-top: -50px;
`;
const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid red;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;
const PosterBg = styled.div`
  background: url(${(props) => props.background}) center/cover no-repeat;
  width: 100%;
  height: 100%;
`;

// useQuery가 state와 effect를 전부 대체한다.
const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
      medium_cover_image
    }
  }
`;

// allTweets {
//   id
//   text
//   author {
//     userName
//   }
// }

const Movies = () => {
  // data가 안 들어와서 undefined와 null처리를 해야할 필요가 없다. ★★★★★
  // const results = useQuery(ALL_MOVIES);
  // console.log(results);
  const { data, loading } = useQuery(ALL_MOVIES);

  if (loading) {
    return <Loading>loading</Loading>;
  }
  return (
    <Container>
      <Header>
        <Title>Movies List</Title>
      </Header>
      <MoviesGrid>
        {data.allMovies.map((movie) => (
          <PosterContainer key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <PosterBg background={movie.medium_cover_image} />
            </Link>
          </PosterContainer>
        ))}
        {/* {data.allTweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))} */}
      </MoviesGrid>
    </Container>
  );
};

export default Movies;
