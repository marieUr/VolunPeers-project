import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Companies</h4>
            <Link to="/profile">
              <p>One</p>
            </Link>
            <Link to="/profile">
              <p>Two</p>
            </Link>
            <Link to="/profile">
              <p>Three</p>
            </Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>For Volunteers</h4>
            <Link to="/profile">
              <p>One</p>
            </Link>
            <Link to="/profile">
              <p>Two</p>
            </Link>
            <Link to="/profile">
              <p>Three</p>
            </Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>General Information</h4>
            <Link to="/profile">
              <p>Newsletter</p>
            </Link>
            <Link to="/profile">
              <p>Press</p>
            </Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>Stay in touch with us!</h4>
            <div className="MailContainer">
              <Link to="/profile">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </p>
                <p>Mail</p>
              </Link>
            </div>
          </div>
          <div className="sb__footer-links_div">
            <div className="socialMedia">
              <a href="www.facebook.com">
                <p>
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </p>
              </a>
              <a href="www.twitter.com">
                <p>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </p>
              </a>
              <a href="www.linkedin.com">
                <p>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </p>
              </a>
              <a href="www.instagram.com">
                <p>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </p>
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p className="trademark">
              @{new Date().getFullYear()} VolunPeers. All rights reserved. We
              love our planet!
            </p>
          </div>
          <div className="sb__footer-below-links">
            <Link to="/">
              <p>Terms & Conditions</p>
            </Link>
            <Link to="/">
              <p>Impressum</p>
            </Link>
            <Link to="/body">
              <p>Cookie Declaration</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
