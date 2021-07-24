import React, { useState } from "react";
import "./style.css";
import MentorHeader from "../mentorHeader/index.js";
import VideoCard from "../videoCard/index.js";

const Mentor = ({ mentorData }) => {
  const { playlists } = mentorData;
  const [playlistId, playlistIdSetter] = useState(playlists[0]._id);

  let currentPlaylist = playlists.find((item) => item._id === playlistId);


  return (
    <div className="mentor">
      <MentorHeader
        mentorData={mentorData}
        playlistId={playlistId}
        playlistIdSetter={playlistIdSetter}
      />
      <div className="videoCardGrid">
        {currentPlaylist.videos.map((item) => {
          return (
            <VideoCard mentorImg={mentorData.profile} videosDetails={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Mentor;
