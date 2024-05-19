import React from "react";
import { imageCdn } from "../constants";

const VideoCard = ({ imageId }) => {
  return (
    <div className="w-20 md:w-36 flex-shrink-0 rounded-md cursor-pointer lg:hover:scale-90 transition-transform duration-300 hover:z-50">
      <img
        className="w-full h-full rounded-md"
        src={imageCdn + imageId}
        alt="Video Thumbnail"
      />
    </div>
  );
};

export default VideoCard;
