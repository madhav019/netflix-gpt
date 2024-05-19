import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/TMDB";

const useMoviesList = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const getPopular = () =>
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    ).then((response) => response.json());

  const getTopRated = () =>
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    ).then((response) => response.json());

  const getUpcoming = () =>
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    ).then((response) => response.json());

  const fetchData = () => {
    Promise.all([getPopular(), getTopRated(), getUpcoming()]).then(
      ([res1, res2, res3]) => {
        setPopular(res1.results);
        setTopRated(res2.results);
        setUpcoming(res3.results);
      }
    );
  };

  useEffect(fetchData, []);

  return [popular, topRated, upcoming];
};

export default useMoviesList;
