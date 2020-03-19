import React, { useState } from "react";
import { connect } from "react-redux";

import Description from "../components/description";
import Card from "../components/card";
import SearchBar from "../components/searchBar";

import Helper from "../helper/app.helper";

import "./Home.scss";

const Home = ({ baseData }) => {
  let newData = Helper.latestData(baseData);
  let details = Helper.detail(newData);

  // search field
  const [searchFieldInput, setsearchFieldInput] = useState("");
  const searchHandler = e => {
    setsearchFieldInput(e);
  };

  // data filter
  if (searchFieldInput !== "") {
    newData = newData.filter(e =>
      e.country.toLowerCase().includes(searchFieldInput.toLowerCase())
    );
  }

  return (
    <div className="home">
      <h1>Coronavirus disease (COVID - 19) outbreak</h1>
      <Description
        confirmed={details[0]}
        death={details[1]}
        recovered={details[2]}
      />
      <SearchBar
        searchHandler={searchHandler}
        searchFieldInput={searchFieldInput}
        setsearchFieldInput={setsearchFieldInput}
      />
      <Card data={newData} searchFieldInput={searchFieldInput} />
    </div>
  );
};

const mapStateToProps = state => {
  return { baseData: state.baseData };
};
export default connect(mapStateToProps)(Home);
