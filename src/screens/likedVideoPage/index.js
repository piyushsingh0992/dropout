import React from "react";
import "./style.css";
import Navigation from "../../components/navigation/index.js";
import VideoCard from "../../components/videoCard/index.js";
import Heading from "../../components/heading/index.js";
import { useTheme } from "../../contexts/themeContext/index.js";
import { useLikedVideos } from "../../contexts/likedVideoContext/index.js";

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
            {likedVideoState.map((item) => {
              return <VideoCard videosDetails={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedVideoPage;
