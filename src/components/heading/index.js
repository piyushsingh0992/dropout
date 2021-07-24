import React from "react";
import { useTheme } from "../../contexts/themeContext/index.js";
const Heading = ({ text }) => {
  const { theme } = useTheme();
  return (
    <div
      className="heading"
      style={{ borderBottom: `1px solid ${theme.boldText}` }}
    >
      <h1
        style={{
          color: theme.boldText,
          fontSize: `1.5rem`,
          padding: `0.5rem 0`,
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default Heading;
