import React,{useState} from "react";
import "./searchVideoCard.css";

import { NavLink } from "react-router-dom";
import book from "./images/try.jpg";
import pic from "../../utils/images/mentors/tanay/profile.png";
import ThumbNail from "../thumbNail/ThumbNail.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import PlaylistModal from "../playlistModal/PlaylistModal.js";

const SearchVideoCard = ({ videosDetails }) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  const {
    title,
    mentorName,
    thumbnail,
    views,
    videoId,
    mentorId,
    liked,
    profile,
  } = videosDetails;

  const { theme } = useTheme();
  let x =
    "ssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
  return (
    <div className="searchVideoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"searchThumnail"}
        videoId={videoId}
        modalTriggerSetter={modalTriggerSetter}
      />
      <div className="searchVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>
          {title.length > 70 ? `${title.slice(0, 40)}...` : title}
        </p>

        <div className="searchVideoDetails">
          <NavLink to={`/mentor/${mentorId}`}>
            <div className="searchVideoCardMentorDetails">
              <img src={profile} className="searchVideoCardMentorImg" />
              <p style={{ color: theme.primaryText }}>{mentorName} </p>
            </div>
          </NavLink>
          <p>{views} views </p>
        </div>
      </div>
      {modalTrigger && (
        <PlaylistModal
          modalTriggerSetter={modalTriggerSetter}
          videoId={videoId}
        />
      )}
    </div>
  );
};

export default SearchVideoCard;
