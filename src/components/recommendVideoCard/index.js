import React,{useState} from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import ThumbNail from "../thumbNail";
import { useTheme } from "../../contexts/themeContext";
import PlaylistModal from "../playlistModal";

const RecommendVideoCard = ({ videoDetails }) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  
  let { title, thumbnail, mentor, _id, views } = videoDetails;
  
  const { theme } = useTheme();
  
  return (
    <div className="recommendVideoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"recommendThumbnail"}
        videoId={_id}
        modalTriggerSetter={modalTriggerSetter}
      />

      <div className="recommendVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>{title.slice(0, 45)}...</p>
        <NavLink to={`/mentor/${mentor._id}`}>
          <div className="recommendvideoDetails">
            <img src={mentor.profile} />
            <div>
              <p>{mentor.name} </p>
              <p>{views} views</p>
            </div>
          </div>
        </NavLink>
      </div>
      {modalTrigger && (
        <PlaylistModal
          modalTriggerSetter={modalTriggerSetter}
          videoId={_id}
        />
      )}
    </div>
  );
};

export default RecommendVideoCard;
