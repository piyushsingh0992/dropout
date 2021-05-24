import React from "react";
import Navigation from "../../components/navigation/Navigation.js";
import VideoCard from "../../components/videoCard/VideoCard.js";
import "./likedVideoPage.css";
import {useTheme }from "../../contexts/themeContext/themeContext.js";
const LikedVideoPage = () => {
  const { theme } = useTheme();
  return (
    <div className="likedVideoPage">
      <Navigation />
      <div className="likedVideos">
        <div
          className="likedVideosHeading"
          style={{
            color: theme.boldText,
            borderBottom: `2px solid ${theme.boldText}`,
          }}
        >
          <h1> Liked Video's</h1>
        </div>
        <div className="likedVideoPageGrid">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default LikedVideoPage;
