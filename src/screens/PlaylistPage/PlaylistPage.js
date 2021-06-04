import React from "react";
import Navigation from "../../components/navigation/Navigation.js";
import Heading from "../../components/heading/Heading.js";
const PlaylistPage = () => {
  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={"Playlist"} />
      </div>
    </div>
  );
};

export default PlaylistPage;
