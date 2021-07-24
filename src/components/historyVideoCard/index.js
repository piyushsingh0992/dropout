import React, { useState } from "react";
import "./historyVideoCard.css";
import { NavLink } from "react-router-dom";
import pic from "../../utils/images/mentors/tanay/profile.png";
import ThumbNail from "../thumbNail/index.js";
import book from "./images/try.jpg";
import PlaylistModal from "../playlistModal/index.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const HistoryVideoCard = ({
  title,
  thumbnail,
  mentor,
  videoId,
  views,
  time,
}) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="historyVideoCardContainer">
      <div className="historyVideoCard">
        <ThumbNail
          thumbnail={thumbnail}
          type={"historyThumnail"}
          videoId={videoId}
          modalTriggerSetter={modalTriggerSetter}
        />
        <div className="historyVideoDetailsContainer">
          <p style={{ color: theme.boldText }}>
            {title.length > 70 ? `${title.slice(0, 40)}...` : title}
          </p>

          <div className="historyVideoDetails">
            <NavLink to={`/mentor/${mentor._id}`}>
              <div className="historyVideoCardMentorDetails">
                <img
                  src={mentor.profile}
                  className="historyVideoCardMentorImg"
                />
                <p style={{ color: theme.primaryText }}>{mentor.name} </p>
              </div>
            </NavLink>
            <p>{views} views </p>
          </div>
        </div>
      </div>

      <p style={{ color: theme.boldText }}>{time}</p>
      {modalTrigger && (
        <PlaylistModal
          modalTriggerSetter={modalTriggerSetter}
          videoId={videoId}
        />
      )}
    </div>
  );
};

export default HistoryVideoCard;
