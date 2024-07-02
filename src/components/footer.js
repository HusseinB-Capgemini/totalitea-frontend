import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 2, textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; 2024 Totalitea Online Shop. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
