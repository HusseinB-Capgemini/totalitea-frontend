import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Button
      component={RouterLink}
      to="/login"
      variant="contained"
      color="primary"
      sx={{ mt: 2 }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
