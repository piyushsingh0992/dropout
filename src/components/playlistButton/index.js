import React, { useState } from "react";
import "./playlistButton.css";
import playlistWhite from "../../utils/images/icons/playlistWhite.svg";
import playlistGrey from "../../utils/images/icons/playlist.svg";
const PlaylistButton = ({ videoId, playlist, modalTriggerSetter }) => {
  function playListHandler() {
    modalTriggerSetter(true);
  }

  return playlist ? (
    <div className="videoPlayerPlaylistButton" onClick={playListHandler}>
      <img src={playlistGrey} />
      Add to Playlist
    </div>
  ) : (
    <div className="playlistBtnContainer">
      <p>Add to Playlist</p>
      <img
        src={playlistWhite}
        className="playlistVideoCardBtn"
        onClick={playListHandler}
      />
    </div>
  );
};

export default PlaylistButton;
