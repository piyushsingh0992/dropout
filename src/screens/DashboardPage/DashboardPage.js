import React, { useEffect } from "react";
import "./dashboardPage.css";
import Navigation from "../../components/navigation/Navigation.js";
import Heading from "../../components/heading/Heading.js";
import { useAuth } from "../../contexts/authContext/authContext";
import { useLocation, useNavigate  } from "react-router-dom";

const DashboardPage = () => {
  const {
    login: { mentor, userName },
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!mentor) {
      navigate(state && state.from ? state.from : "/");
    }
  }, []);

  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={`Hey ${userName}`} />
        <div className="dashboardNavbar">
          <span>Upload video</span>
          <span>Stats</span>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
