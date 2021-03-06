import React from "react";
import "./style.css";
import { useTheme } from "../../contexts/themeContext";

const ContextManager = () => {
  let { theme, themeDispatch } = useTheme();

  return (
    <div className="contextManagerContainter">
      <div className="contextManager">
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
