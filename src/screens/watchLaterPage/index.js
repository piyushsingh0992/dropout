import React from "react";
import Navigation from "../../components/navigation";
import Heading from "../../components/heading";
import { useWatchLater } from "../../contexts/watchLaterContext";
import SearchVideoCard from "../../components/searchVideoCard";
import Loader from "../../components/loader";
const WatchLaterPage = () => {
  let { watchLaterState } = useWatchLater();
  return (
    watchLaterState?<div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={"Watch Later"} />
        {watchLaterState.map((item) => {
          return <SearchVideoCard videosDetails={item} />;
        })}
      </div>
    </div>:<Loader size={5}/>
  );
};

export default WatchLaterPage;
