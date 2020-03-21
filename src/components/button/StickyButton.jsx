import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./StickyButton.scss";

function StickyButton({ click }) {
  return (
    <div className="sticky-button" onClick={click}>
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
}

export default StickyButton;
