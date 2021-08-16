import React, { useEffect, useState } from "react";
import "./style.css";
import Navigation from "../../components/navigation";
import Heading from "../../components/heading";
import { useAuth } from "../../contexts/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import VideoStats from "../../components/videoStats";
import Loader from "../../components/loader";
import { apiCall } from "../../apiCall";
import Button from "../../components/button";
import { useTheme } from "../../contexts/themeContext";
import UploadVideo from "../../components/uploadVideo";
const DashboardPage = () => {
  const {
    login: { mentor, userName, userKey },
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [videos, videosSetter] = useState(null);
  const [playlists, playlistsSetter] = useState([]);
  const { theme } = useTheme();
  const [uploadModal, uploadModalSetter] = useState(false);
  const [mentorDetails, mentorDetailsSetter] = useState(null);

  useEffect(() => {
    if (!mentor) {
      navigate(state && state.from ? state.from : "/");
      return;
    }
    (async function () {
      let { data, success, message } = await apiCall("GET", `stats/${userKey}`);
      if (success === true) {
        mentorDetailsSetter({
          mentorId: data.mentorId,
          channelId: data.channelId,
          channelName: data.channelName,
        });
        videosSetter(data.videos);
        playlistsSetter(data.playlists);
      } else {
        navigate(state && state.from ? state.from : "/");
      }
    })();
  }, []);

  return videos ? (
    <div className="pageContainer">
      <UploadVideo
        trigger={uploadModal}
        triggerSetter={uploadModalSetter}
        mentorDetails={mentorDetails}
        userName={userName}
        playlists={playlists}
        videosSetter={videosSetter}
      />
      <Navigation />
      <div className="screenContainer">
        <Heading text={`Hey ${userName}`} />
        <div className="dashBoardControls" style={{ color: theme.boldText }}>
          <p>Sort By</p>
          <Button
            text="upload"
            clickFunction={() => {
              uploadModalSetter(true);
            }}
          />
        </div>

        <div className="userVideosContainer">
          {videos.map((stats) => {
            return <VideoStats stats={stats} />;
          })}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default DashboardPage;
