import React from "react";
import "./likedVideoPage.css";
import Navigation from "../../components/navigation/Navigation.js";
import VideoCard from "../../components/videoCard/VideoCard.js";
import Heading from "../../components/heading/Heading.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLikedVideos } from "../../contexts/likedVideoContext/likedVideoContext.js";

const LikedVideoPage = () => {
  const { theme } = useTheme();
  const { likedVideoState } = useLikedVideos();

  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={"Liked Video's"} />
        <div className="likedVideosGridContainer">
          <div className="videoCardGrid">
            {likedVideoState.map((item) => (
              <VideoCard videosDetails={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedVideoPage;
