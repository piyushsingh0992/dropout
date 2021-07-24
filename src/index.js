import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./contexts/languageContext/index.js";
import { ThemeProvider } from "./contexts/themeContext";
import { BrowserRouter as Router } from "react-router-dom";
import { LikedVideoProvider } from "./contexts/likedVideoContext/index.js";
import { WatchLaterProvider } from "./contexts/watchLaterContext/index.js";
import { SubscribeProvider } from "./contexts/subscribeContext/index.js";
import { PlaylistProvider } from "./contexts/playlistContext/index.js";
import { AuthProvider } from "./contexts/authContext";
import { ToastProvider } from "./contexts/toastContext";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <ToastProvider>
              <PlaylistProvider>
                <SubscribeProvider>
                  <WatchLaterProvider>
                    <LikedVideoProvider>
                      <App />
                    </LikedVideoProvider>
                  </WatchLaterProvider>
                </SubscribeProvider>
              </PlaylistProvider>
            </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
