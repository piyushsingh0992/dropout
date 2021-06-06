import React from "react";
import "./playlistButton.css";
import playlistWhite from "../../utils/images/icons/playlistWhite.svg";
import playlistGrey from "../../utils/images/icons/playlist.svg";
const PlaylistButton = ({ videoId, playlist }) => {
  return playlist ? (
    <div
      className="videoPlayerPlaylistButton"
      onClick={(e) => {
        alert("clicked playlist");
      }}
    >
      <img src={playlistGrey} />
      Add to Playlist
    </div>
  ) : (
    <div className="playlistBtnContainer">
      <p>Add to Playlist</p>
      <img
        src={playlistWhite}
        className="playlistVideoCardBtn"
        onClick={(e) => {
          alert("clicked playlist");
        }}
      />
    </div>
  );
};

export default PlaylistButton;
