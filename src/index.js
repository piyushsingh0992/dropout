import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { LanguageProvider } from "./contexts/languageContext/languageContext.js";
import { ThemeProvider } from "./contexts/themeContext/themeContext.js";
import { BrowserRouter as Router } from "react-router-dom";
import {dropoutServer} from "./server/server.js";

dropoutServer();
ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  // </React.StrictMode>,
  ,document.getElementById("root")
);
