import React from "react";
import "./style.css";
import Navigation from "../../components/navigation/index.js";
import Heading from "../../components/heading/index.js";
import PlaylistCard from "../../components/playlistCard/index.js";
import { usePlaylist } from "../../contexts/playlistContext/playlistContext.js";
const PlaylistPage = () => {
  const { playlistState, playlistDispatch } = usePlaylist();

  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={"Playlist"} />
        <div>
          {playlistState.map((item) => {
            return <PlaylistCard name={item.name} playlistId={item._id} videos={item.videos} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
