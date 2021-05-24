import React, { useState } from "react";
import logo from "../../utils/images/brand/dropout.svg";
import menu from "../../utils/images/icons/menu.svg";
import SideNav from "../../components/sideNav/SideNav.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import "./videoPlayerPage.css";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer.js";
import VideoNotes from "../../components/videoNotes/VideoNotes.js";
import RecommendVideoCard from "../../components/recommendVideoCard/RecommendVideoCard.js";
const VideoPlayerPage = () => {
  const { theme } = useTheme();
  const [side, sideSetter] = useState(false);
  return (
    <div className="videoPlayerPage">
      <div
        className="videoPlayerNavbar"
        style={{ background: theme.highLightBackground }}
      >
        <img src={logo} className="videoPlayerBrand" />
        <img
          src={theme.menu}
          className="videoPlayerMenu"
          onClick={() => {
            console.log("clicked");
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
        <VideoPlayer />
        <div className="videoPlayerNotesContainer">
          <VideoNotes />
          <RecommendVideoCard />
          <RecommendVideoCard />
          <RecommendVideoCard />
          <RecommendVideoCard />
          <RecommendVideoCard />
          
          
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
