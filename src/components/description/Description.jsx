import React from "react";
import CountUp from "react-countup";

import "./Description.scss";

const Description = ({ confirmed, death, recovered }) => {
  return (
    <div className="description">
      <div>
        <span className="confirmed">
          <CountUp end={confirmed} separator={","} duration={2} />
        </span>
        <div>Confirmed Cases</div>
      </div>
      <div>
        <span className="death">
          <CountUp end={death} separator={","} duration={2} />
        </span>
        <div>Death Cases</div>
      </div>
      <div>
        <span className="recovered">
          <CountUp end={recovered} separator={","} duration={2} />
        </span>
        <div>Recovered Cases</div>
      </div>
    </div>
  );
};

export default Description;
