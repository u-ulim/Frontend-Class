import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

import Banner from "../components/Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upComingMovie } = useSelector(
    (state) => state.movie
  );

  console.log(popularMovie, topRatedMovie, upComingMovie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {/*  조건부 */}

      {/* <Banner movies={popularMovie.results && popularMovie.results[0]} /> */}
      {popularMovie.results && <Banner movies={popularMovie.results[0]} />}
    </div>
  );
};

export default Home;
