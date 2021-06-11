import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./contexts/languageContext/languageContext.js";
import { ThemeProvider } from "./contexts/themeContext/themeContext.js";
import { BrowserRouter as Router } from "react-router-dom";
import { dropoutServer } from "./server/server.js";
import { LikedVideoProvider } from "./contexts/likedVideoContext/likedVideoContext.js";
import { WatchLaterProvider } from "./contexts/watchLaterContext/watchLaterContext.js";
import { SubscribeProvider } from "./contexts/subscribeContext/subscribeContext.js";
import { PlaylistProvider } from "./contexts/playlistContext/playlistContext.js";
import { AuthProvider } from "./contexts/authContext/authContext.js";
import { ToastProvider } from "./contexts/toastContext/toastContext.js";

dropoutServer();
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
