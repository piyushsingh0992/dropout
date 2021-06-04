import React, { useEffect, useState } from "react";
import "./videoPlayerPage.css";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../../utils/images/brand/dropout.svg";
import menu from "../../utils/images/icons/menu.svg";
import SideNav from "../../components/sideNav/SideNav.js";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer.js";
import VideoNotes from "../../components/videoNotes/VideoNotes.js";
import RecommendVideoCard from "../../components/recommendVideoCard/RecommendVideoCard.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";

const VideoPlayerPage = () => {
  const { theme } = useTheme();
  const [side, sideSetter] = useState(false);
  let { videoId } = useParams();
  const [videoDetails, videoDetailsSetter] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        let { data } = await axios.get(`/video/${videoId}`);
        console.log({data});
        debugger;
        videoDetailsSetter(data);
      } catch (error) {
        console.error("error ->", error);
      }
    })();
  }, [videoId]);



  return videoDetails ? (
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
          <VideoNotes />
          {videoDetails.recommendations.map((item) => {
            return (
              <RecommendVideoCard
                videoDetails={item}
                mentor={videoDetails.mentor}
              />
            );
          })}
          {/* <RecommendVideoCard />
          <RecommendVideoCard />
          <RecommendVideoCard />
          <RecommendVideoCard />
          <RecommendVideoCard /> */}
        </div>
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  );
};

export default VideoPlayerPage;
