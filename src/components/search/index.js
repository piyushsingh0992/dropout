import React from "react";
import "./style.css";
import searchIcon from "../../utils/images/icons/search.svg";
import { useTheme } from "../../contexts/themeContext/index.js";
const Search = ({ searchTerm, searchTermSetter, keyCodeSetter }) => {
  const { theme } = useTheme();

  return (
    <div className="search" style={{ backgroundColor: theme.cardBackground }}>
      <img src={searchIcon} />
      <input
        style={{ backgroundColor: theme.cardBackground, color: theme.boldText }}
        placeholder="search"
        value={searchTerm}
        onChange={(e) => searchTermSetter(e.target.value)}
        onKeyDown={(e) => {
          keyCodeSetter(e.keyCode);
        }}
      />
    </div>
  );
};

export default Search;
