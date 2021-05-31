import "./App.css";
import HomePage from "./screens/HomePage/HomePage.js";
import ChooseMentorPage from "./screens/ChooseMentorPage/ChooseMentorPage.js";
import MentorPage from "./screens/MentorPage/MentorPage.js";
import LoginPage from "./screens/LoginPage/LoginPage.js";
import { useTheme } from "./contexts/themeContext/themeContext.js";
import ContextManager from "./components/contextManager/ContextManager.js";
import SearchPage from "./screens/SearchPage/SearchPage";
import VideoPlayerPage from "./screens/VideoPlayerPage/VideoPlayerPage.js";
import LikedVideoPage from "./screens/LikedVideoPage/LikedVideoPage";
import ErrorPage from "./screens/ErrorPage/ErrorPage.js";
import { Routes, Route } from "react-router-dom";
function App() {
  const { theme } = useTheme();
  return (
    <div className="app" style={{ background: theme.primaryBackground }}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/choosementor" element={<ChooseMentorPage />} />
        <Route path="/mentor/:mentorId" element={<MentorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/videoplayer/:videoId" element={<VideoPlayerPage />} />
        <Route path="/likedvideos" element={<LikedVideoPage />} />
        <Route path="/videoplayer" element={<VideoPlayerPage />} />
        <Route path="/videoplayer" element={<VideoPlayerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ContextManager />
    </div>
  );
}

export default App;
