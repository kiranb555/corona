import React from "react";
import Data from "../helper/precaution.js";
import Fade from "react-reveal/Fade";
import "./Precaution.scss";

function Precaution() {
  return (
    <div className="precaution">
      <h1>Precaution measure : </h1>
      <Fade bottom>
        <div className="precautionHolder">
          <h4 className="question">
            What can I do to prevent the spread of the novel coronavirus?
          </h4>
          <ul className="answer">
            <li>
              Stay at home with symptoms such as a runny nose, cough, sore
              throat or a fever. Avoid social contacts.
            </li>
            <li>
              If you do not have any symptoms, work from home as much as
              possible or try to spread your working hours.
            </li>
            <li>Practice good hygiene:</li>
            <ul>
              <li>Wash your hands with soap regularly</li>
              <li>Cough and sneeze on the inside of your elbow</li>
              <li>Use paper tissues</li>
              <li>Do not shake hands</li>
            </ul>
          </ul>
        </div>
      </Fade>
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

export default Precaution;
