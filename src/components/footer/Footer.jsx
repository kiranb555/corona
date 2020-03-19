import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div>&copy;2020</div>
      <div>Developed by Kiran b, Bangalore,India</div>
      <div className="footer-icon">
        <ul>
          <li>
            <a
              href="https://twitter.com/7__kiran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kiranb555"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/7__kiran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <small className="source">data source - https://github.com/pomber</small>
    </div>
  );
}

export default Footer;
