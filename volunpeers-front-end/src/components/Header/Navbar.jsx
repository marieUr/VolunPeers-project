import { useState } from 'react';
import { useAuth } from './../Login/Login_Validation.js';
import React from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export function Navbar() {
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
              <NavLink to="/" className={`${styles.navLink}`}>
                Home
              </NavLink>
            </li>
            <li onClick={removeActive}>
              <NavLink to="/about" className={`${styles.navLink}`}>
                About us
              </NavLink>
            </li>
            <li onClick={removeActive}>
              <NavLink to="/donations" className={`${styles.navLink}`}>
                Donations
              </NavLink>
            </li>
            <li onClick={removeActive}>
              <NavLink
                to="/volunteering-projects"
                className={`${styles.navLink}`}
              >
                Volunteering Projects
              </NavLink>
            </li>
            {getAccessToken() ? (
              <>
                <li className={`${styles.profilePhoto}`} onClick={removeActive}>
                  <Link
                    to="/profile"
                    className={`${styles.profileLinkContainer}`}
                  >
                    <FontAwesomeIcon
                      className={`${styles.userIcon}`}
                      icon={faUser}
                      size="1x"
                    />
                    <span className={`${styles.username}`}>
                      {user && user.name}
                    </span>
                    <span className={`${styles.profileText}`}>Profile</span>
                  </Link>
                </li>
                <li className={`${styles.profilePhoto}`} onClick={removeActive}>
                  <Link to="/" className={`${styles.navLink}`}>
                    <button
                      className={`${styles.logoutButton}`}
                      to="/"
                      type="button"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li className={`${styles.profilePhoto}`} onClick={removeActive}>
                <Link to="/Login" className={`${styles.navLink}`}>
                  <button className={`${styles.profileText}`}>
                    <p>
                      <FontAwesomeIcon icon={faLock} size="1x" />
                    </p>
                    <span className={`${styles.loginButton}`}>Login</span>
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
