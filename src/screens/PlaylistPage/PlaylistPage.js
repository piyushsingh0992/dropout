import React from "react";
import "./playlistPage.css";
import Navigation from "../../components/navigation/Navigation.js";
import Heading from "../../components/heading/Heading.js";
import PlaylistCard from "../../components/playlistCard/PlaylistCard.js";
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
