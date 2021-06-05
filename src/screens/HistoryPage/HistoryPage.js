import React, { useEffect, useState } from "react";
import "./historyPage.css";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation.js";
import HistoryVideoCard from "../../components/historyVideoCard/HistoryVideoCard.js";
import Heading from "../../components/heading/Heading.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";

import Loader from "../../components/loader/Loader.js";
const HistoryPage = () => {
  const [history, historyArraySetter] = useState([]);
  const [loading, loadingSetter] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    (async function () {
      try {
        let response = await axios.get("/history");
        historyArraySetter(response.data.history);
        loadingSetter(true);
      } catch (error) {
        console.error(error);
        loadingSetter(false);
      } finally {
        loadingSetter(false);
      }
    })();
  }, []);

  return loading ? (
    <Loader size={5}/>
  ) : (
    <div className="pageContainer">
      <Navigation />

      <div className="screenContainer">
        <Heading text={"History"} />
        {history.map(
          ({ title, thumbnail, videoId, mentorName, views, profile }) => {
            return (
              <HistoryVideoCard
                title={title}
                profile={profile}
                views={views}
                mentorName={mentorName}
                thumbnail={thumbnail}
                videoId={videoId}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
