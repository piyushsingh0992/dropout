import React from "react";
import "./style.css";
import Navigation from "../../components/navigation";
import VideoCard from "../../components/videoCard";
import Heading from "../../components/heading";
import { useTheme } from "../../contexts/themeContext";
import { useLikedVideos } from "../../contexts/likedVideoContext";

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
