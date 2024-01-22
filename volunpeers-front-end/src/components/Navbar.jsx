import { useState } from 'react';
import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import lock from '../assets/lock.svg';

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
        <Link to="/" reloadDocument className={`${styles.logo}`}>
          VolunPeers
        </Link>

        <nav className={`${styles.navbar}`}>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>
                About us
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/donations" className={`${styles.navLink}`}>
                Donations
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/volunteering-projects" className={`${styles.navLink}`}>
                Volunteering Projects
              </Link>
            </li>
            <li className={`${styles.profilePhoto}`} onClick={removeActive}>
              <Link to="/profile">
                <img
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt="User"
                />
                 <span className={`${styles.profileText}`}>Profile</span>
              </Link>  
            </li>
          </ul>
          <div className='hidden md:flex' onClick={removeActive}>
          <button className={`${styles.profileText}`}>
              <Link to="/Login" className={`${styles.navLink}`}>
                <img src ={lock} />
                Login
              </Link>
          </button>    
          </div>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
          {/*  Special Bar so its always visible / -> Develop that later once everything else is in Place!
         <div className={`${styles.hamburgerShown} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
           // <span className={`${styles.barShown} `}></span>
            <span className={`${styles.barShown}`}></span>
            <span className={`${styles.barShown}`}></span>
          </div>
        */}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
