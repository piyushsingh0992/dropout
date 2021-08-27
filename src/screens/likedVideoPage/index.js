import React from "react";
import "./style.css";
import Navigation from "../../components/navigation";
import VideoCard from "../../components/videoCard";
import Heading from "../../components/heading";
import { useLikedVideos } from "../../contexts/likedVideoContext";
import  Loader  from "../../components/loader";
const LikedVideoPage = () => {
  const { likedVideoState } = useLikedVideos();
  return (
    likedVideoState ?<div className="pageContainer">
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
    </div>:<Loader size={5}/>
  );
};

export default LikedVideoPage;
