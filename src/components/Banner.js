import React from 'react';
import { Box, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
      <Typography variant="h1" component="div" gutterBottom>
        Totalitea Online Shop
      </Typography>
      <Typography variant="h5" component="div">
        Discover a world of premium tea and coffee
      </Typography>
    </Box>
  );
};

export default Banner;
