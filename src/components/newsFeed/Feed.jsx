import React from "react";
import { connect } from "react-redux";

import FeedCard from "./Feed.card.jsx";

import Fade from "react-reveal/Fade";

import "./Feed.scss";

const Feed = ({ newsData }) => {
  return (
    <div className="feedHolder">
      {newsData.length > 0 ? (
        <>
          <div className="feedHeading">News</div>
          <div className="feedContent">
            {newsData
              ? newsData.map((e, i) => (
                  <Fade bottom key={i}>
                    <FeedCard data={e} />
                  </Fade>
                ))
              : null}
          </div>
        </>
      ) : (
        <div>No feeds available !!</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { newsData: state.newsData };
};

export default connect(mapStateToProps)(Feed);
