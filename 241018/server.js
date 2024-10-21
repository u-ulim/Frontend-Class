import { ApolloServer, gql } from "apollo-server";

// 기존 const에서 let으로 변경, 값을 변경할 수 있으니까
let tweets = [
  {
    id: "1",
    text: "first One",
    userId: "2",
  },
  {
    id: "2",
    text: "Second One",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "Dk",
    lastName: "Peter",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

// 타입이 필요
// 타입에 대한 정의가 먼저 필요

// type Tweet {
//   text: String
// }  `
// Query
// tweet(id: ID!) (!느낌표는 non bollabel데이터)
// username: String!
// => description """ / """"
const typeDefs = gql`
  type User {
    id: ID!
    """
    Is the sum of firstName + lastName as a String
    """
    userName: String!
    firstName: String!
    lastName: String!
  }

  """
  Tweet Object represents a resource for a tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allTweets: [Tweet!]!
    allUsers: [User!]! # 여기서 Users를 User로 수정
    allMovies: [Movie!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie # params가 string이니까!!
  }

  type Mutation {
    postTweet(text: String, userId: ID): Tweet!
    """
    Delete a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean!
  }

  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Int!
    genres: [String!]!
    summary: String
    description_full: String
    synopsis: String
    yt_trailer_code: String
    language: String!
    background_image: String
    background_image_original: String
    small_cover_image: String
    medium_cover_image: String
    large_cover_image: String
  }
`;

// resolvers가 필요
const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    allUsers() {
      console.log("userName called");
      return users;
    },
    // => id, 인자를 가져오기 때문에 root가 필요함
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },

    allMovies() {
      return (
        fetch("https://yts.mx/api/v2/list_movies.json")
          .then((response) => response.json())
          // .then((json) => console.log(json));
          // air에서 볼 수 있게
          .then((json) => json.data.movies)
      );
    },

    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => json.data.movie);
    },
  },
  // 뮤테이션, 클라이언트가 값을 추가하는,
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      console.log(tweets);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  // User: {
  //   // 이 시점에서 default값을 받는 느낌으로,
  //   // userName() {
  //   //   // userName이 없으니까 여기를 실행시킬게
  //   //   console.log("userName called second");
  //   //   console.log(root);
  //   //   return "Hello";
  //   // },
  //   userName({ firstName, lastName }) {
  //     // userName이 없으니까 여기를 실행시킬게
  //     // console.log("userName called second");
  //     // console.log(root);
  //     return `${firstName} ${lastName}`;
  //   },
  // },
  User: {
    // 함수
    firstName({ firstName }) {
      return firstName;
    },
    lastName({ lastName }) {
      return lastName;
    },
    userName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },

  Tweet: {
    // 함수
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        console.log("해당 자료가 없습니다.");
        return null;
      }
      return result;
      // return users.find((user) => user.id === userId);
    },
  },
};

// CJS 방식 <=> ESM과는 다ㄹ늠
// const { ApolloServer } = require("apollo-server");

// APOLL는 항상 타입에 대한 정의가 필요하다.
// 서버는 항상 들을 준비가 되어있다. 클라이언트의 요청을 들을 준비.
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
