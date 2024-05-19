import React from "react";
import useGetVideoById from "../hooks/useGetVideoById";

const VideoBackground = ({ id }) => {
  const mainMovieVideoData = useGetVideoById(id);

  return (
    <iframe
      className="absolute w-screen aspect-video lg:aspect-auto lg:h-screen"
      src={
        "https://www.youtube.com/embed/" +
        mainMovieVideoData?.key +
        "?autoplay=1&muted=1&loop=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  );
};

export default VideoBackground;
