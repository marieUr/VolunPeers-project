// AuthContext.js
import React from 'react';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setLoggedUser] = useState(null);

  const handleLogin = (token, username) => {
    localStorage.setItem('accessToken', token);
    setIsLoggedIn(true);
    setLoggedUser({
      name: username,
      profilePicture: 'https://randomuser.me/api/portraits/men/33.jpg',
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    setLoggedUser(null);
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
