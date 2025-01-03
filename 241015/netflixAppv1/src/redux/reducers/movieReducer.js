// let initialState = {
//   popularMovie: {},
//   topRatedMovie: {},
//   upComingMovie: {},
//   loading: true,
// };

// const movieReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "GET_MOVIE_SUCCESS":
//       return {
//         ...state,
//         popularMovie: payload.popularMovie,
//         topRatedMovie: payload.topRatedMovie,
//         upComingMovie: payload.upComingMovie,
//         loading: true,
//       };
//     case "GET_MOVIES_REQUEST":
//       return {
//         ...state,
//         loading: false,
//       };
//     case "GET_MOVIES_FAILURE":
//       return {
//         ...state,
//         loading: false,
//       };

//     default:
//       return { ...state };
//   }
// };

// export default movieReducer;

let initialState = {
  popularMovie: {},
  topRatedMovie: {},
  upComingMovie: {},
  genreList: [],
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //loading spinner
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovie: payload.popularMovie,
        topRatedMovie: payload.topRatedMovie,
        upComingMovie: payload.upComingMovie,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default movieReducer;
0;
