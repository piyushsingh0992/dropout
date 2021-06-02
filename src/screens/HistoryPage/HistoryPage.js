import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation.js";
import axios from "axios";
import HistoryVideoCard from "../../components/historyVideoCard/HistoryVideoCard.js";
import "./historyPage.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
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
    <h1>loading</h1>
  ) : (
    <div className="historyPage">
      <Navigation />

      <div className="historyDisplay">
        <div>
          <h1 style={{ color: theme.boldText, margin: "1rem" }}>History</h1>
        </div>
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
