import React from 'react';
import MainBanner from '../../Images/beach-rocks-image.webp';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className={`${styles.Banner}`}>
      <img src={MainBanner} alt="Rocks with a beach" />
      <div className={`${styles.TextSection}`}>
        <h1>Join today and make a change for tomorrow!</h1>
        <Link to="/signup">
        <button aria-label="Sign Up Button" >
          Sign Up
        </button>
        </Link>
        <Link to="/login">
        <button aria-label="Log In Button">
          Log In
        </button>
        </Link>
        </div>
    </div>
  );
}

export default HeroSection;
