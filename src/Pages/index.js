import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/LoginPage';
import SignUp from '../Pages/SignUp';
import ProductPage from '../Pages/ProductPage';
import ProtectedRoute from './Helpers/ProtectedRoute';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    isProtected: false, 
  },
  {
    path: '/login',
    element: <Login />,
    isProtected: false,
  },
  {
    path: '/signup',
    element: <SignUp />,
    isProtected: false,
  },
  {
    path: '/product',
    element: <ProductPage />,
    isProtected: false,
  },
];

const AppRoutes = () => {
    console.log('AppRoutes:', routes); 

    return (
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.isProtected ? (
              <ProtectedRoute>
                {route.element}
              </ProtectedRoute>
            ) : route.element}
          />
        ))}
      </Routes>
    );
  };

export default AppRoutes;