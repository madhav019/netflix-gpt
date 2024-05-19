import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/TMDB";

const useGetVideoById = (id) => {
  const [data, setData] = useState([]);

  const getNowPlayingMovies = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>
        setData(response?.results?.find((item) => item.type === "Trailer"))
      )
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (id) getNowPlayingMovies();
  }, []);

  return data;
};

export default useGetVideoById;
