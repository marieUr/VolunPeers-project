import { useState } from 'react';
import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  //adding the states
  const [isActive, setIsActive] = useState(false);

  //add active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="#home" className="Logo">
          VolunPeers
        </a>

        <nav className={'${styles.navbar}'}>
          <ul className={"${styles.navMenu} ${isActive ? styles.active : ''}"}>
            <li onClick={removeActive}>
              <a href="#home" className={'${styles.navLink}'}>
                Home
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={'${styles.navLink}'}>
                About us
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={'${styles.navLink}'}>
                Donations
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={'${styles.navLink}'}>
                Volunteering Projects
              </a>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={'${styles.bar}'}></span>
            <span className={'${styles.bar}'}></span>
            <span className={'${styles.bar}'}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
