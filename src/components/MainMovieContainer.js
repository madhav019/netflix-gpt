import React from "react";
import VideoBackground from "./VideoBackground";

const MainMovieContainer = ({ title, description, id }) => {
  return (
    <div className="relative  w-screen aspect-video lg:aspect-auto lg:h-screen top-0 text-white select-none">
      <div className="absolute flex flex-col gap-4 justify-center z-10 pl-[5vw] bg-gradient-to-r from-black h-full w-full bg-opacity-">
        <div className="font-bold text-lg md:text-3xl">{title}</div>
        <div className="hidden w-[40vw] md:block lg:w-[20vw]">
          {description}
        </div>
      </div>

      {id && <VideoBackground id={id} />}
    </div>
  );
};

export default MainMovieContainer;
