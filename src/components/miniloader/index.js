import React from "react";
import "./style.css";
const MiniLoader = ({ size }) => {
  let dimension = size
    ? {
        width: `${1.5 * size}px`,
        height: `${1.5 * size}px`,
        border: `${size / 6}px solid var( --white )`,
        borderTop: `${size / 6}px solid var(--primary)`,
      }
    : {
        width: `15px`,
        height: `15px`,

        border: `3px solid var( --white )`,
        borderTop: `3px solid var(--primary)`,
      };
  return (
    <div className="miniLoaderContainer">
      <div className="miniLoader" style={dimension}></div>
    </div>
  );
};

export default MiniLoader;
