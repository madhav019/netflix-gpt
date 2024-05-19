import React from "react";
import VideoCard from "./VideoCard ";

const VideoList = ({ title, data, classNames }) => {
  return (
    <div
      className={
        "relative flex flex-col gap-6 z-10 overflow-visible" + " " + classNames
      }
    >
      <div className="text-white font-bold text-xl md:text-2xl px-6 mt-8 md:mt-14">
        {title}
      </div>
      <div className="flex inset-0 gap-4 w-full overflow-x-scroll no-scrollbar px-6">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <VideoCard key={item.id} imageId={item.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default VideoList;
