import React from "react";
import "./search.css";
import searchIcon from "../../utils/images/icons/search.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const Search = () => {
  const { theme } = useTheme();
  return (
    <div className="search" style={{ backgroundColor: theme.cardBackground }}>
      <img src={searchIcon} />
      <input
        style={{ backgroundColor: theme.cardBackground }}
        placeholder="search"
      />
    </div>
  );
};

export default Search;
