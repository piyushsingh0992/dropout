import React, { useState, useEffect } from "react";
import "./style.css";
import Search from "../../components/search";
import Navigation from "../../components/navigation";
import SearchVideoCard from "../../components/searchVideoCard";
import { apiCall } from "../../apiCall";
import Loader from "../../components/loader";
import { useTheme } from "../../contexts/themeContext";
import useDebounce from "../../customHooks/debounce";
const SearchPage = () => {
  const [searchTerm, searchTermSetter] = useState("");
  const [loader, loaderSetter] = useState(false);
  const [searchResult, searchResultSetter] = useState([]);
  const [searchMessage, searchMessageSetter] = useState(null);
  const { theme } = useTheme();

  let searchCall = useDebounce(async function () {
    if (!searchTerm) return;
    loaderSetter(true);
    let { success, data } = await apiCall("GET", `search/${searchTerm}`);
    if (success === true) {
      searchResultSetter(data.searchResult);
      searchMessageSetter(data.message);
    }
    loaderSetter(false);
  }, 300);

  useEffect(() => {
    searchCall(searchTerm);
  }, [searchTerm]);
  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Search searchTerm={searchTerm} searchTermSetter={searchTermSetter} />

        {loader ? (
          <Loader size={5} />
        ) : (
          <div>
            {searchMessage && (
              <h2 style={{ color: theme.boldText }}>{searchMessage}</h2>
            )}
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
