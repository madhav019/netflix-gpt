import React from "react";

const VideoBackground = ({ id }) => {
  return (
    <div className="w-full h-full object-cover">
      {id && (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}?mute=1&autoplay=1&loop=1&controls=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded youtube"
        />
      )}
    </div>
  );
};

export default VideoBackground;
