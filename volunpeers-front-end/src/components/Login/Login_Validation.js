// AuthContext.js
import React, { useEffect, createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setLoggedUser] = useState(null);

  const handleLogin = (token) => {
    localStorage.setItem('accessToken', token);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // fetch userdata when token gets accessed
    const fetchUserData = async () => {
      const token = localStorage.getItem('accessToken');
      console.log('Access Token:', token);
      if (token) {
        try {
          const response = await fetch('/api/usercreds', {
            method: 'GET',
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log('User Data API response:', response);
          console.log('User state through Header:', user);
          if (response.ok) {
            const userData = await response.json();
            setLoggedUser(userData);
          } else {
            // Handle error
            console.error('Failed to fetch user data:', response.statusText);
          }
        } catch (err) {
          // handle fetch error
          console.error(`Error fetching user data: `, err);
        }
      }
    };

    fetchUserData();
  }, [isLoggedIn]);

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('accessToken');
    setLoggedUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
