import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
      setIsLoggedIn(true);
      setToken(token);
    } else {
      setUser(null);
      setIsLoggedIn(false);
      setToken(null);
    }
  }, [token]);

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    console.log('Login:', token); 

    localStorage.setItem('token', token);
    setUser(decodedToken);
    setIsLoggedIn(true);
    setToken(token); 
  };
  const logout = () => {
    console.log('Logout'); 

    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};