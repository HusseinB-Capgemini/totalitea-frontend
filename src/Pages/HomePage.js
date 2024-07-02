import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';

import LoginButton from '../components/LoginButton';

const HomePage = () => {
  return (
    <div className="home-page">
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h3" gutterBottom>
                About Our Coffee
              </Typography>
              <Typography variant="body1">
                We offer a variety of coffee blends sourced from around the
                world, meticulously roasted to perfection to bring out the rich
                flavors.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h3" gutterBottom>
                About Our Tea
              </Typography>
              <Typography variant="body1">
                Our teas are carefully selected for their quality and unique
                characteristics, ensuring a delightful tea-drinking experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <LoginButton /> 
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
