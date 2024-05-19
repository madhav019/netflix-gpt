import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "../components/MainMovieContainer";

const Browse = () => {
  const nowPlayingMovies = useNowPlayingMovies();
  const mainMovie = nowPlayingMovies?.[0];

  return (
    <div className="bg-black h-screen">
      <Header />
      <MainMovieContainer
        title={mainMovie?.original_title}
        description={mainMovie?.overview}
        id={mainMovie?.id}
      />
    </div>
  );
};

export default Browse;
