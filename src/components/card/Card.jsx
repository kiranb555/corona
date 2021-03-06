import React from "react";
import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";
import CountUp from "react-countup";

import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="cardHolder">
      {data.map(function(e, i) {
        return (
          <div key={`${e["country"]}-${i}`}>
            <Fade>
              <div className="card">
                <Link to={`/country/${e["country"]}`}>
                  <div className="card-heading"> {e["country"]}</div>
                  <div className="card-content">
                    <div>
                      <CountUp
                        end={e["confirmed"]}
                        separator={","}
                        duration={3}
                      />
                      <div>Confirmed</div>
                    </div>
                    <div>
                      <CountUp end={e["deaths"]} separator={","} duration={3} />
                      <div>Fatal</div>
                    </div>
                    <div>
                      <CountUp
                        end={e["recovered"]}
                        separator={","}
                        duration={3}
                      />
                      <div>Recovered</div>
                    </div>
                  </div>
                  <div className="card-footer">
                    View Details{" "}
                    <span style={{ fontSize: "15px" }}>&#10095;</span>
                  </div>
                </Link>
              </div>
            </Fade>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
