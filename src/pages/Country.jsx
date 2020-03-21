import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import axios from "axios";

import { Row, Col } from "react-bootstrap";

import Description from "../components/description/Description";
import CountryCode from "../helper/country.code.json";

import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";

import TABLE from "../components/table";
import Feed from "../components/newsFeed";

import "./Country.scss";

const Country = ({ baseData }) => {
  const { name } = useParams();

  const countryData = baseData[name];
  const countryCode = CountryCode[name];

  const options = {
    chart: {
      type: "line"
    },
    title: {
      text: "Day To Day Updates"
    },
    colors: ["#FC7A57", "#586BA4", "greenyellow", "#A9E5BB", "#2E3532"],
    xAxis: {
      categories: countryData.map(e => e.date)
    },
    yAxis: {
      title: {
        text: "Number of Cases"
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    tooltip: {
      shared: true,
      crosshairs: true
    },
    series: [
      {
        name: "Confirmed",
        data: countryData.map(e => e.confirmed)
      },
      {
        name: "Deaths",
        data: countryData.map(e => e.deaths)
      },
      {
        name: "Recovered",
        data: countryData.map(e => e.recovered)
      }
    ]
  };

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${
          countryCode ? countryCode.toLowerCase() : `in`
        }&category=health&apiKey=2d5855918129408693f3ddaf302daadd
      `
      )
      .then(res => setNews(res.data.articles))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="country">
      <div className="country-head">
        <div className="country-name">{name.toUpperCase()}</div>
        {countryCode ? (
          <div className="country-flag">
            <img
              src={`https://lipis.github.io/flag-icon-css/flags/1x1/${countryCode.toLowerCase()}.svg`}
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
      <HighChartsReact highCharts={HighCharts} options={options} />
      <Row>
        <Col xs={12} md={6}>
          {countryData ? <TABLE data={countryData} /> : null}
        </Col>
        <Col xs={12} md={6}>
          {news ? <Feed data={news} /> : null}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return { baseData: state.baseData };
};

export default connect(mapStateToProps)(Country);
