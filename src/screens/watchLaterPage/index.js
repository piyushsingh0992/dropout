import React from "react";
import Navigation from "../../components/navigation/index.js";
import Heading from "../../components/heading/index.js";
import { useWatchLater } from "../../contexts/watchLaterContext";
import SearchVideoCard from "../../components/searchVideoCard/index.js";
const WatchLaterPage = () => {
  let { watchLaterState } = useWatchLater();
  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={"Watch Later"} />
        {watchLaterState.map((item) => {
          return <SearchVideoCard videosDetails={item} />;
        })}
      </div>
    </div>
  );
};

export default WatchLaterPage;
