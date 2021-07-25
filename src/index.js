import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./contexts/languageContext";
import { ThemeProvider } from "./contexts/themeContext";
import { BrowserRouter as Router } from "react-router-dom";
import { LikedVideoProvider } from "./contexts/likedVideoContext";
import { WatchLaterProvider } from "./contexts/watchLaterContext";
import { SubscribeProvider } from "./contexts/subscribeContext";
import { PlaylistProvider } from "./contexts/playlistContext";
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
