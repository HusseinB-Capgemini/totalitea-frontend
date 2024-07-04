import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../content/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); 
  console.log('ProtectedRoute:', isLoggedIn); 

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;