import React from "react";
import FeedCard from "./Feed.card";

import Fade from "react-reveal/Fade";

import "./Feed.scss";

const Feed = ({ data }) => {
  return (
    <div className="feedHolder">
      {data.length > 0 ? (
        <>
          <div className="feedHeading">News</div>
          <div className="feedContent">
            {data
              ? data.map((e, i) => (
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

export default Feed;
