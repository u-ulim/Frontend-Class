import { ApolloServer, gql } from "apollo-server";

// type Tweet {
//   text: String
// }
const typeDefs = gql`
  type Query {
    text: String
    flim: String
    allFilms: String
  }
`;

// CJS 방식 <=> ESM과는 다ㄹ늠
// const { ApolloServer } = require("apollo-server");

// APOLL는 항상 타입에 대한 정의가 필요하다.
// 서버는 항상 들을 준비가 되어있다. 클라이언트의 요청을 들을 준비.

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
