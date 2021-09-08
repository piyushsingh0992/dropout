import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, NavLink } from "react-router-dom";

import brandLogo from "../../assets/brand/brandLogo.png";
import SideNav from "../../components/sideNav";
import VideoPlayer from "../../components/videoPlayer";
import VideoNotes from "../../components/videoNotes";
import RecommendVideoCard from "../../components/recommendVideoCard";
import { useTheme } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/authContext";
import Loader from "../../components/loader";
import moment from "moment";
import { apiCall } from "../../apiCall";

import { useHistory } from "../../contexts/historyContext";
const VideoPlayerPage = () => {
  const { theme } = useTheme();
  const {
    login: { userKey },
  } = useAuth();
  const { history, historyDispatch } = useHistory();

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
        historyDispatch({
          type: "ADD_VIDEO",
          payload: {
            video: {
              video: data.video,
              created_at: moment().toDate().getTime(),
            },
          },
        });
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
          <img src={brandLogo} className="videoPlayerBrand" />
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
