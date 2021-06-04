import React, { useState } from "react";
import "./contextManager.css";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";

const ContextManager = () => {
  let { languageDispatch } = useLanguage();
  let { theme, themeDispatch } = useTheme();

  return (
    <div className="contextManagerContainter">
      <div className="contextManager">
        <select
          className="languageContextManager"
          onChange={(e) => {
            languageDispatch({ payload: e.target.value });
          }}
        >
          <option value="English">English</option>
          <option value="Hindi">हिंदी</option>
          <option value="Gujarati">ગુજરાતી</option>
          <option value="Bangla">বাংলা</option>
          <option value="Marathi">मराठी</option>
          <option value="Spanish">Spanish</option>
          <option value="French">french</option>
          <option value="Italian">Italiano</option>
        </select>

        <button
          onClick={() => {
            themeDispatch({ payload: theme.toggleTo });
          }}
          className="themeContextManager"
          style={{ border: `2px solid ${theme.boldText}` }}
        >
          <img src={theme.themeButton} />
        </button>
      </div>
    </div>
  );
};

export default ContextManager;
