import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAuth } from '../content/AuthContext';
import LoginButton from "../components/LoginButton";

const Banner = () => {
 const { isLoggedIn, user, logout } = useAuth();

  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center' }}>
      <Typography variant="h2" component="div" gutterBottom>
        Totalitea Online Shop
      </Typography>
      <Typography variant="h6" component="div">
        Discover a world of premium tea and coffee
      </Typography>
      {isLoggedIn && user && user.fullname && (
        <Typography variant="subtitle1" component="div">
          Welcome, {user.fullname}! 
        </Typography>
      )


      <div>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
      ) : (
        <LoginButton />
                )}
      </div>
    </Box>
  );
};

export default Banner;
