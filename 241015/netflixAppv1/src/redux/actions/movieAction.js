// // 03. API한테 action을 받음
// // const getMovies = () => {
// //   return async (dispatch) => {
// //     let url1 = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
// //     const response = await fetch(url1);
// //     const data = response.json();
// //     console.log(data);
// //     dispatch({});

// //     let url2 = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
// //     const response2 = await fetch(url2);
// //     const data2 = response2.json();
// //     console.log(data2);

// //     let url3 = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
// //     const response3 = await fetch(url3);
// //     const data3 = response3.json();
// //     console.log(data3);

// //     //! 여기서 우리가 한 번 생각해볼 필요가 있다.
// //     // 현 시점에서는 Node.js => fetch();

// //     // F/E : Node.js에서 자유롭게 외부 API 데이터를 찾아와서 사용할 수 있는 API 호출 라이브러리?
// //     // API의 데이터값이 복수일 때, 디버깅을 보다 효율적으로 해줄 수 있는 라이브러리?

// //     // React.js로 작업하는 F/E 진영 API 호출 도구는 Axios (디버깅에 되게 유리하다.)
// //     // Interceptors
// //   };
// // };

// // export const movies = { getMovies };

// // const getMovies = () => {

// // }

// // export const movies = { getMovies };

// import api from "../api";

// const API_KEY = import.meta.env.VITE_API_KEY;

// const getMovies = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: "GET_MOVIES_REQUEST",

//       });
//       const popularMovieApi = api.get(
//         `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
//       );

//       const topRatedMovieApi = api.get(
//         `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
//       );

//       const upComingMovieApi = api.get(
//         `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
//       );
//     } catch (error) {
//       dispatch({
//         type: "GET_MOVIES_FAILURE"
//       })
//     } finally {
//     }

//     // const popularMovieApi = await api.get(
//     //   `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
//     // );

//     // const topRatedMovieApi = await api.get(
//     //   `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
//     // );

//     // const upComingMovieApi = await api.get(
//     //   `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
//     // );

//     // 위쪽으로 올림 try문으로,
//     // const popularMovieApi = api.get(
//     //   `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
//     // );

//     // const topRatedMovieApi = api.get(
//     //   `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
//     // );

//     // const upComingMovieApi = api.get(
//     //   `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
//     // );

//     // 한 번에 찾아오기
//     // 여기서 문제 이거 시간이 많이 걸리지 않나?
//     const [popularMovie, topRatedMovie, upComingMovie] = await Promise.all([
//       popularMovieApi,
//       topRatedMovieApi,
//       upComingMovieApi,
//     ]);

//     dispatch({
//       type: "GET_MOVIE_SUCCESS",
//       payload: {
//         popularMovie: popularMovie.data,
//         topRatedMovie: topRatedMovie.data,
//         upComingMovie: upComingMovie.data,
//       },
//     });
//   };
// };

// export const movieAction = { getMovies };

// 준형

// const getMovies = () => {};

// export const movies = { getMovies };

import api from "../api";

const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    // const popularMovieApi = await api.get(
    //   `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
    // );

    // const topRatedMovieApi = await api.get(
    //   `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
    // );

    // const upComingMovieApi = await api.get(
    //   `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
    // );
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
      });
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=ko`
      );

      // 한 번에 찾아오기
      // 여기서 문제 이거 시간이 많이 걸리지 않나?
      const [popularMovie, topRatedMovie, upComingMovie, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          genreApi,
        ]);
      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          popularMovie: popularMovie.data,
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          genreList: genreList.data,
          loading: true,
        },
      });
    } catch (err) {
      dispatch({
        type: "GET_MOVIES_FAILURE",
        loading: true,
      });
    }
  };
};

export const movieAction = { getMovies };
