import React, { useState, useEffect } from "react";
import "./style.css";
import Search from "../../components/search/Search.js";
import Navigation from "../../components/navigation/Navigation.js";
import SearchVideoCard from "../../components/searchVideoCard/SearchVideoCard.js";
import { apiCall } from "../../apiCall/apiCall";
import Loader from "../../components/loader/Loader";
import { useTheme } from "../../contexts/themeContext/themeContext";
const SearchPage = () => {
  const [searchTerm, searchTermSetter] = useState("");
  const [keyCode, keyCodeSetter] = useState(null);
  const [loader, loaderSetter] = useState(false);
  const [searchResult, searchResultSetter] = useState([]);
  const [searchActive, searchActiveSetter] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    if (keyCode === 13 && searchTerm.length > 0) {
      console.log("searchActive ->", searchActive);
      (async function () {
        searchActiveSetter(true);
        loaderSetter(true);

        let { success, data, message } = await apiCall(
          "GET",
          `search/${searchTerm}`
        );
        if (success === true) {
          searchResultSetter(data);
        }
        loaderSetter(false);
      })();
    }
  }, [searchTerm, keyCode]);
  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Search
          searchTerm={searchTerm}
          searchTermSetter={searchTermSetter}
          keyCodeSetter={keyCodeSetter}
        />

        {loader ? (
          <Loader size={5} />
        ) : (
          <div>
            {searchActive ? (
              searchResult.length > 1 ? (
                <h2 style={{ color: theme.boldText }}>Search Results</h2>
              ) : (
                <h2 style={{ color: theme.boldText }}>No Results found</h2>
              )
            ) : null}
            {searchResult.map((item) => {
              return <SearchVideoCard videosDetails={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
