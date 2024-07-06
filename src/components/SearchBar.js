import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [supplierName, setSupplierName] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm, supplierName);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={5}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          label="Search by Supplier"
          variant="outlined"
          fullWidth
          margin="normal"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={handleSearch} style={{ marginTop: 16 }}>
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;