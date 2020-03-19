import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.scss";

const SearchBar = ({
  searchHandler,
  searchFieldInput,
  setsearchFieldInput
}) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="search"
        name="search"
        className="shadow_effect"
        value={searchFieldInput}
        onChange={e => searchHandler(e.target.value)}
      />
      {searchFieldInput ? (
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => setsearchFieldInput("")}
          className="cursor"
        />
      ) : (
        <FontAwesomeIcon icon={faSearch} />
      )}
    </div>
  );
};

export default SearchBar;
