import React, { useEffect, useState } from "react";
import "./style.css";
import Navigation from "../../components/navigation";
import Heading from "../../components/heading";
import { useAuth } from "../../contexts/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import VideoStats from "../../components/videoStats";
import Loader from "../../components/loader";
import { apiCall } from "../../apiCall";
const DashboardPage = () => {
  const {
    login: { mentor, userName, userKey },
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [videos, videosSetter] = useState(null);

  useEffect(() => {
    if (!mentor) {
      navigate(state && state.from ? state.from : "/");
      return;
    }
    (async function () {
      let { data, success, message } = await apiCall("GET", `stats/${userKey}`);
      
      if (success === true) {
        videosSetter(data.videos);
      } else {
        navigate(state && state.from ? state.from : "/");
      }
    })();
  }, []);

  return videos ? (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={`Hey ${userName}`} />

        <div className="dashboardNavbar">
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
