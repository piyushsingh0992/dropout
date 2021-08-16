import React, { useEffect, useState, useReducer } from "react";
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
  const [videos, videosSetter] = useState([]);
  const [playlists, playlistsSetter] = useState([]);
  const { theme } = useTheme();
  const [uploadModal, uploadModalSetter] = useState(false);
  const [mentorDetails, mentorDetailsSetter] = useState(null);
  const [loader, loaderSetter] = useState(false);

  function filteringVideos(data, payload) {
    const { currentFilter } = payload;
    switch (currentFilter) {
      case "Views":
        return data.sort((a, b) => {
          return b.views - a.views;
        });
      case "Comments":
        return data.sort((a, b) => {
          return b.comments.length - a.comments.length;
        });

      case "Likes":
        return data.sort((a, b) => {
          return b.likes - a.likes;
        });

      default:
        return data;
    }
  }

  const [filter, filterSetter] = useState({
    currentFilter: null,
  });

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
        loaderSetter(true);
      } else {
        navigate(state && state.from ? state.from : "/");
      }
    })();
  }, []);

  let filteredVideos = [...videos];
  filteringVideos(filteredVideos, filter);

  return loader ? (
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
          <p>
            <input
              type="radio"
              name="dashBoard-filter"
              value="nofilter"
              onChange={(e) => {
                filterSetter((value) => {
                  return { ...value, currentFilter: e.target.value };
                });
              }}
              checked={filter && filter.currentFilter === "nofilter"}
            />
            &nbsp;&nbsp;No filter
          </p>
          <p>
            <input
              type="radio"
              name="dashBoard-filter"
              value="Likes"
              onChange={(e) => {
                filterSetter((value) => {
                  return { ...value, currentFilter: e.target.value };
                });
              }}
              checked={filter && filter.currentFilter === "Likes"}
            />
            &nbsp;&nbsp;Likes
          </p>
          <p>
            <input
              type="radio"
              name="dashBoard-filter"
              value="Views"
              onChange={(e) => {
                filterSetter((value) => {
                  return { ...value, currentFilter: e.target.value };
                });
              }}
              checked={filter && filter.currentFilter === "Views"}
            />
            &nbsp;&nbsp;Views
          </p>
          <p>
            <input
              type="radio"
              name="dashBoard-filter"
              value="Comments"
              onChange={(e) => {
                filterSetter((value) => {
                  return { ...value, currentFilter: e.target.value };
                });
              }}
              checked={filter && filter.currentFilter === "Comments"}
            />
            &nbsp;&nbsp;Comments
          </p>
          <Button
            text="Upload"
            clickFunction={() => {
              uploadModalSetter(true);
            }}
          />
        </div>

        <div className="userVideosContainer">
          {filteredVideos.map((stats) => {
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
