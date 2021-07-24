import React from "react";
import Navigation from "../../components/navigation/Navigation.js";
import Heading from "../../components/heading/Heading.js";
import { useWatchLater } from "../../contexts/watchLaterContext/watchLaterContext";
import SearchVideoCard from "../../components/searchVideoCard/SearchVideoCard.js";
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
