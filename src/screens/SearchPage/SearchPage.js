import React from "react";
import Search from "../../components/search/Search";
import Navigation from "../../components/navigation/Navigation.js";
import SearchVideoCard from "../../components/searchVideoCard/SearchVideoCard.js";

import "./searchPage.css";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <Navigation />
      <div className="searchDisplay">
        <Search />
        <SearchVideoCard />
        <SearchVideoCard /> <SearchVideoCard /> <SearchVideoCard />{" "}
        <SearchVideoCard /> <SearchVideoCard /> <SearchVideoCard />{" "}
        <SearchVideoCard /> <SearchVideoCard /> <SearchVideoCard />{" "}
        <SearchVideoCard /> <SearchVideoCard /> <SearchVideoCard />{" "}
        <SearchVideoCard />
      </div>
      <div></div>
    </div>
  );
};

export default SearchPage;
