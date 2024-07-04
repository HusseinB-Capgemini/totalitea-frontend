import React from 'react';
import AppRoutes from './Routes/AppRoutes';
//import Footer from './components/Footer';
import { CssBaseline, Box } from '@mui/material';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Box sx={{ zIndex: 10, position: 'sticky', top: 0 }}>
        <Banner />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppRoutes />
      </Box>
      <Box sx={{ mt: 'auto' }}>

      </Box>
    </div>
  );
}

export default App;
