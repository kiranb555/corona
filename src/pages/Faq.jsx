import React from "react";
import Data from "../helper/faq.js";
import Fade from "react-reveal/Fade";

import "./Precaution.scss";

function Faq() {
  return (
    <div className="precaution">
      <h1>Frequently asked questions  </h1>
      {Data.map((e, i) => {
        return (
          <Fade bottom key={i}>
            <div className="precautionHolder">
              <h4 className="question">{e.Q}</h4>
              <div className="answer">{e.A}</div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
}

export default Faq;
