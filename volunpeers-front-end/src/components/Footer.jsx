import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import fb from '../assets/facebooklogo.svg';
import twitter from '../assets/twitterlogo.svg';
import linkedin from '../assets/linkedinlogo.svg';
import instagram from '../assets/instagramlogo.svg';

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
            <h4>Contact</h4>
            <Link to="/profile">
              <p>Mail</p>
            </Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>Social Media</h4>
            <div className="socialMedia">
              <a href="www.facebook.com">
                <p>
                  <img src={fb} alt="Facebook Logo" />
                </p>
              </a>
              <a href="www.twitter.com">
                <p>
                  <img src={twitter} alt="Twitter / X Logo" />
                </p>
              </a>
              <a href="www.linkedin.com">
                <p>
                  <img src={linkedin} alt="LinkedIn Logo" />
                </p>
              </a>
              <a href="www.instagram.com">
                <p>
                  <img src={instagram} alt="Instagram Logo" />
                </p>
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p className="trademark">
              @{new Date().getFullYear()} VolunPeers. All rights reserved. We love our planet!
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