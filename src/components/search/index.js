import React from "react";
import "./style.css";
import searchIcon from "../../assets/icons/search.svg";
import { useTheme } from "../../contexts/themeContext";
const Search = ({ searchTerm, searchTermSetter }) => {
  const { theme } = useTheme();

  return (
    <div className="search" style={{ backgroundColor: theme.cardBackground }}>
      <img src={searchIcon} />
      <input
        style={{ backgroundColor: theme.cardBackground, color: theme.boldText }}
        placeholder="search"
        value={searchTerm}
        onChange={(e) => {
          searchTermSetter(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
