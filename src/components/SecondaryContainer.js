import React from "react";
import VideoList from "./VideoList";

const SecondaryContainer = ({ nowPlaying, popular, topRated, upcoming }) => {
  return (
    <div className="bg-black pb-36">
      <VideoList title="Now Playing" data={nowPlaying} classNames="md:-mt-20" />
      <VideoList title="Popular" data={popular} />
      <VideoList title="Top Rated" data={topRated} />
      <VideoList title="Upcoming" data={upcoming} />
    </div>
  );
};

export default SecondaryContainer;
