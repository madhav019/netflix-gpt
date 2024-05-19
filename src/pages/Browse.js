import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useMainContainerData from "../hooks/useMainContainerData";
import useMoviesList from "../hooks/useMoviesList";

const Browse = () => {
  const [nowPlaying, mainVideo] = useMainContainerData();
  const [popular, topRated, upcoming] = useMoviesList();

  return (
    <div className="bg-black">
      <Header />
      <MainContainer mainVideo={mainVideo} />
      <SecondaryContainer
        nowPlaying={nowPlaying}
        popular={popular}
        topRated={topRated}
        upcoming={upcoming}
      />
    </div>
  );
};

export default Browse;
