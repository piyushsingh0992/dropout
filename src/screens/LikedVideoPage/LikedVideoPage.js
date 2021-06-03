import React from "react";
import Navigation from "../../components/navigation/Navigation.js";
import VideoCard from "../../components/videoCard/VideoCard.js";
import "./likedVideoPage.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLikedVideos } from "../../contexts/likedVideoContext/likedVideoContext.js";
const LikedVideoPage = () => {
  const { theme } = useTheme();
  const {likedVideoState}=useLikedVideos();
  
  return (
    <div className="likedVideoPage">
      <Navigation />
      <div className="likedVideos">
        <h1
          style={{
            color: theme.boldText,
          }}
          className="likedVideosHeading"
        >
          Liked Video's
        </h1>

        <div className="likedVideoPageGrid">
        {likedVideoState.map(item=><VideoCard videosDetails={item}/>)}
                 </div>
      </div>
    </div>
  );
};

export default LikedVideoPage;
