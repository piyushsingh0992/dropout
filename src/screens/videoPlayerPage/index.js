import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, NavLink } from "react-router-dom";
import logo from "../../utils/images/brand/dropout.svg";
import SideNav from "../../components/sideNav/index.js";
import VideoPlayer from "../../components/videoPlayer/index.js";
import VideoNotes from "../../components/videoNotes/index.js";
import RecommendVideoCard from "../../components/recommendVideoCard/index.js";
import { useTheme } from "../../contexts/themeContext/index.js";
import { useAuth } from "../../contexts/authContext/index.js";
import Loader from "../../components/loader/index.js";

import { apiCall } from "../../apiCall/apiCall";


const VideoPlayerPage = () => {
  const { theme } = useTheme();
  const {
    login: { userKey },
  } = useAuth();

  const [side, sideSetter] = useState(false);
  const [loader, loaderSetter] = useState(true);
  let { videoId } = useParams();
  const [videoDetails, videoDetailsSetter] = useState(null);
  const [recommendation, recommendationSetter] = useState([]);
  const [notes, notesSetter] = useState([]);
  useEffect(() => {
    (async function () {
     
        loaderSetter(true);
        let { success, data, message } = await apiCall(
          "POST",
          `video/${videoId}`,
          {
            userKey,
          }
        );

        if (success === true) {
          videoDetailsSetter(data.video);
          recommendationSetter(data.recommendation);
          notesSetter(data.notes);
        }
        loaderSetter(false);
      
    })();
  }, [videoId]);

  return loader ? (
    <Loader size={5} />
  ) : (
    <div className="videoPlayerPage">
      <div
        className="videoPlayerNavbar"
        style={{ background: theme.highLightBackground }}
      >
        <NavLink to="/">
          <img src={logo} className="videoPlayerBrand" />
        </NavLink>
        <img
          src={theme.menu}
          className="videoPlayerMenu"
          onClick={() => {
            sideSetter((value) => !value);
          }}
        />
      </div>

      <div
        className={`videoPlayerSideNavContainer${
          side ? " videoPlayer-show" : " videoPlayer-hide"
        } `}
        onClick={() => {
          sideSetter((value) => !value);
        }}
      >
        <SideNav />
      </div>

      <div className="videoPlayerPageContainer">
        <VideoPlayer videoDetails={videoDetails} />
        <div className="videoPlayerNotesContainer">
          <VideoNotes videoNotes={notes} videoId={videoDetails._id} />
          {recommendation.map((item) => {
            return <RecommendVideoCard videoDetails={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
