import React, { useEffect, useState } from "react";
import "./historyPage.css";
import axios from "axios";
import moment from "moment";
import Navigation from "../../components/navigation/Navigation.js";
import HistoryVideoCard from "../../components/historyVideoCard/HistoryVideoCard.js";
import Heading from "../../components/heading/Heading.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import Loader from "../../components/loader/Loader.js";
const HistoryPage = () => {
  const [history, historyArraySetter] = useState([]);
  const [loading, loadingSetter] = useState(true);
  const { theme } = useTheme();

  const {
    login: { userKey },
  } = useAuth();
  useEffect(() => {
    (async function () {
      try {
        let { status, data } = await axios.get(
          `https://dropout.piyushsingh6.repl.co/history/${userKey}`
        );
        if (status === 200) {
          historyArraySetter(data.videos);
        }

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
    <Loader size={5} />
  ) : (
    <div className="pageContainer">
      <Navigation />

      <div className="screenContainer">
        <Heading text={"History"} />
        {history.map(({ video }) => {
          let { title, thumbnail, _id, mentor, views, created_at } = video;

          let time = moment(created_at).startOf('day').fromNow(); ;
        
          return (
            <HistoryVideoCard
              title={title}
              views={views}
              mentor={mentor}
              thumbnail={thumbnail}
              videoId={_id}
              time={time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HistoryPage;
