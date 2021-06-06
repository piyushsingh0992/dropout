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
dropoutServer();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <SubscribeProvider>
            <WatchLaterProvider>
              <LikedVideoProvider>
                <App />
              </LikedVideoProvider>
            </WatchLaterProvider>
          </SubscribeProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
