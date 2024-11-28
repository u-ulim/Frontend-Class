import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

client
  .query({
    // 값을 찾아오겠다는 방식
    query: gql`
      {
        allMovies {
          title
          id
        }
      }
    `,
  })
  .then((data) => console.log(data));

export default client;
