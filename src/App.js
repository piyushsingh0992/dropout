import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Toast from "./components/toast/Toast.js";
import HomePage from "./screens/HomePage/HomePage.js";
import ChooseMentorPage from "./screens/ChooseMentorPage/ChooseMentorPage.js";
import MentorPage from "./screens/MentorPage/MentorPage.js";
import HistoryPage from "./screens/HistoryPage/HistoryPage.js";
import LoginPage from "./screens/LoginPage/LoginPage.js";
import SearchPage from "./screens/SearchPage/SearchPage";
import VideoPlayerPage from "./screens/VideoPlayerPage/VideoPlayerPage.js";
import LikedVideoPage from "./screens/LikedVideoPage/LikedVideoPage";
import WatchLaterPage from "./screens/WatchLaterPage/WatchLaterPage.js";
import PlaylistPage from "./screens/PlaylistPage/PlaylistPage.js";
import ErrorPage from "./screens/ErrorPage/ErrorPage.js";
import ContextManager from "./components/contextManager/ContextManager.js";
import PrivateRoute from "./components/privateRoute/PrivateRoute.js";
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ContextManager />
    </div>
  );
}

export default App;
