import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Toast from "./components/toast/index.js";
import HomePage from "./screens/homePage";
import ChooseMentorPage from "./screens/chooseMentorPage";
import MentorPage from "./screens/mentorPage";
import HistoryPage from "./screens/historyPage";
import LoginPage from "./screens/loginPage";
import SearchPage from "./screens/searchPage";
import VideoPlayerPage from "./screens/videoPlayerPage";
import LikedVideoPage from "./screens/likedVideoPage";
import WatchLaterPage from "./screens/watchLaterPage";
import PlaylistPage from "./screens/playlistPage";
import DashboardPage from "./screens/dashboardPage";
import ErrorPage from "./screens/errorPage";
import ContextManager from "./components/contextManager";
import PrivateRoute from "./components/privateRoute/index.js";
import { useTheme } from "./contexts/themeContext/themeContext.js";

function App() {
  const { theme } = useTheme();
  return (
    <div className="app" style={{ background: theme.primaryBackground }}>
      <Toast />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/choosementor" element={<ChooseMentorPage />} />
        <Route path="/mentor/:mentorId" element={<MentorPage />} />
        <PrivateRoute path="/history" element={<HistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <PrivateRoute
          path="/videoplayer/:videoId"
          element={<VideoPlayerPage />}
        />
        <PrivateRoute path="/likedvideos" element={<LikedVideoPage />} />
        <PrivateRoute path="/watchlater" element={<WatchLaterPage />} />
        <PrivateRoute path="/playlist" element={<PlaylistPage />} />
        <PrivateRoute path="/dashboard" element={<DashboardPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ContextManager />
    </div>
  );
}

export default App;
