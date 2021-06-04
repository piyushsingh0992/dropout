import React from "react";
import Navigation from "../../components/navigation/Navigation.js";
import Heading from "../../components/heading/Heading.js";
const WatchLaterPage = () => {
  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={"Watch Later"} />
      </div>
    </div>
  );
};

export default WatchLaterPage;
