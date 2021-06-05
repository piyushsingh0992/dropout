import React, { useState } from "react";
import "./mentor.css";
import MentorHeader from "../mentorHeader/MentorHeader.js";
import VideoCard from "../videoCard/VideoCard.js";
import { useLikedVideos } from "../../contexts/likedVideoContext/likedVideoContext.js";
const Mentor = ({ mentorDetails }) => {
  const { videos, mentor } = mentorDetails;
  const { likedVideoState } = useLikedVideos();
  const [categoryId, categoryIdSetter] = useState(mentor.playlist[0].id);

  let currentPlaylist = videos.filter((item) => {
    if (item.category.id === categoryId) {
      return true;
    } else {
      return false;
    }
  });

  currentPlaylist = currentPlaylist.map((item) => {
    let present = likedVideoState.find(
      (likedVedio) => likedVedio.videoId === item.videoId
    );
    if (present) {
      return present;
    } else {
      return item;
    }
  });

  return (
    <div className="mentor">
      <MentorHeader
        mentor={mentor}
        categoryId={categoryId}
        categoryIdSetter={categoryIdSetter}
      />
      <div className="videoCardGrid">
        {currentPlaylist.map((item) => {
          return <VideoCard mentorImg={mentor.profile}  videosDetails={item} />;
        })}
      </div>
    </div>
  );
};

export default Mentor;
