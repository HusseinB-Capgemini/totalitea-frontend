import React from 'react';
import { Box, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center' }}>
      <Typography variant="h2" component="div" gutterBottom>
        Totalitea Online Shop
      </Typography>
      <Typography variant="h6" component="div">
        Discover a world of premium tea and coffee
      </Typography>
    </Box>
  );
};

export default Banner;
