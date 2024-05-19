import React from "react";
import VideoBackground from "./VideoBackground";
import VideoInfoOverlay from "./VideoInfoOverlay";

const MainContainer = ({ mainVideo }) => {
  return (
    <div className="relative w-screen h-[30vh] md:h-[56vh] lg:h-[80vh] bg-opacity-50 select-none">
      <VideoBackground id={mainVideo?.key} />
      <VideoInfoOverlay
        title={mainVideo?.title}
        description={mainVideo?.overview}
      />
    </div>
  );
};

export default MainContainer;
