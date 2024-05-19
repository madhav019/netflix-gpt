import React from "react";

const VideoInfoOverlay = ({ title, description }) => {
  return (
    <div className="absolute h-full w-full top-0 bottom-o left-0 right-0 text-white flex flex-col justify-center gap-8 pl-[10vw] bg-gradient-to-r from-black">
      <h1 className="font-bold w-[30vw] text-md md:text-3xl">{title}</h1>
      <p className="hidden lg:block w-[20%]">{description}</p>

      <div className="flex gap-6">
        <button className="bg-white hover:bg-opacity-80 text-black py-2 px-8 rounded-md hidden lg:block">
          Play
        </button>
        <button className="bg-zinc-400 bg-opacity-65 hover:bg-opacity-60 py-2 px-8 rounded-md hidden lg:block">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoInfoOverlay;
