import React,{useState} from "react";
import "./recommendVideoCard.css";
import { NavLink } from "react-router-dom";
import ThumbNail from "../thumbNail/ThumbNail.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import PlaylistModal from "../playlistModal/PlaylistModal.js";

const RecommendVideoCard = ({ videoDetails, mentor }) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  
  let { mentorName, title, thumbnail, mentorId, videoId, views } = videoDetails;
  const { theme } = useTheme();
  return (
    <div className="recommendVideoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"recommendThumbnail"}
        videoId={videoId}
        modalTriggerSetter={modalTriggerSetter}
      />

      <div className="recommendVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>{title.slice(0, 45)}...</p>
        <NavLink to={`/mentor/${mentorId}`}>
          <div className="recommendvideoDetails">
            <img src={mentor.profile} />
            <div>
              <p>{mentorName} </p>
              <p>{views} views</p>
            </div>
          </div>
        </NavLink>
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

export default RecommendVideoCard;
