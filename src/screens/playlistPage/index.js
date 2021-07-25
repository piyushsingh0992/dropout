import React from "react";
import "./style.css";
import Navigation from "../../components/navigation";
import Heading from "../../components/heading";
import PlaylistCard from "../../components/playlistCard";
import { usePlaylist } from "../../contexts/playlistContext";
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
