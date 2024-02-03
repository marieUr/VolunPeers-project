import { useState } from 'react';
import { useAuth } from './../Login/Login_Validation.js';
import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  //adding the states
  const [isActive, setIsActive] = useState(false);
  const { isLoggedIn, user, handleLogout } = useAuth();

  //add active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  const getAccessToken = () => {
    return localStorage.getItem('accessToken');
  };
  console.log('Access Token:', getAccessToken());
  console.log('User:', user);
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

            {getAccessToken() ? (
              <li className={`${styles.profilePhoto}`} onClick={removeActive}>
                <Link to="/profile">
                  <img src={user ? user.profilePicture : ''} alt="User" />
                  <span className={`${styles.username}`}>
                    {user && user.name}
                  </span>
                  <span className={`${styles.profileText}`}>Profile</span>
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropDownMenuButton"
                >
                  <Link className="dropdown-item" to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <li className={`${styles.profilePhoto}`} onClick={removeActive}>
                <Link to="/Login" className={`${styles.navLink}`}>
                  <button className={`${styles.profileText}`}>
                    <p>
                      <FontAwesomeIcon icon={faLock} size="1x" />
                    </p>
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
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
