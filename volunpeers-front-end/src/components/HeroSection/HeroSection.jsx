import React from 'react'
import MainBanner from "../../Images/beach-rocks-image.webp";
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={`${styles.Banner}`}>
            <img src={MainBanner} alt="" />
    </div>

  )
}

export default HeroSection