import React from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";

import Description from "../components/description/Description";
import CountryCode from "../helper/country.code.json";

import * as d3 from "d3";

import "./Country.scss";

const Country = ({ baseData }) => {
  const { name } = useParams();

  const countryData = baseData[name];
  const imageLink = CountryCode[name];

  console.log(d3, "d3");
  return (
    <div className="country">
      <div className="country-head">
        <div className="country-name">{name}</div>
        {imageLink ? (
          <div className="country-flag">
            <img
              src={`http://lipis.github.io/flag-icon-css/flags/1x1/${imageLink.toLowerCase()}.svg`}
              alt="flag"
              width="100"
              height="40"
            />
          </div>
        ) : null}
      </div>
      <Description
        confirmed={countryData[countryData.length - 1]["confirmed"]}
        death={countryData[countryData.length - 1]["deaths"]}
        recovered={countryData[countryData.length - 1]["recovered"]}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { baseData: state.baseData };
};

export default connect(mapStateToProps)(Country);
