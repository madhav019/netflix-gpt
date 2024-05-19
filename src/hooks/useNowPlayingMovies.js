import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/TMDB";

const useNowPlayingMovies = () => {
  const [data, setData] = useState([]);

  const getNowPlayingMovies = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => setData(response?.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return data;
};

export default useNowPlayingMovies;
