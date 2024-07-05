import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Banner from './components/Banner';
import AppRoutes from './Pages/index'; 


function App() {
  return (
    
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <CssBaseline />
          <Box sx={{ zIndex: 10, position: 'sticky', top: 0 }}>
<Banner/>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <AppRoutes />
          </Box>

         
        </div>
      
  );
}

export default App;