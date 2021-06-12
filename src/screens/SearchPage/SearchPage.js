import React from "react";
import "./searchPage.css";
import Search from "../../components/search/Search.js";
import Navigation from "../../components/navigation/Navigation.js";
import SearchVideoCard from "../../components/searchVideoCard/SearchVideoCard.js";

const SearchPage = () => {
  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Search />
      </div>
    </div>
  );
};

export default SearchPage;
