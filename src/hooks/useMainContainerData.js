import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/TMDB";

const useMainContainerData = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [mainvideo, setMainvideo] = useState({});

  const getData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((data) => {
        setNowPlaying(data?.results);
        setMainvideo(data?.results?.[0]);
        return fetch(
          `https://api.themoviedb.org/3/movie/${data?.results?.[0]?.id}/videos?language=en-US`,
          API_OPTIONS
        );
      })
      .then((res) => res.json())
      .then((data) =>
        setMainvideo((prev) => {
          return {
            ...prev,
            ...data?.results?.find((item) => item.type === "Trailer"),
          };
        })
      )
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return [nowPlaying, mainvideo];
};

export default useMainContainerData;
