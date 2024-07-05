import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import SearchBar from '../components/SearchBar';
import { useAuth } from '../content/AuthContext'; 

const ProductPage = () => {
  const { user } = useAuth(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async (searchQuery = '') => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `http://localhost:8082/api/products${searchQuery ? `/search?name=${searchQuery}` : ''}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    fetchProducts(searchTerm);
  };

  const addToCart = async (productId, productPrice) => {
    if (!user || !user.id) {
      console.error('User is not authenticated or user ID is missing.', user);
      return;
    }
  
    const cartItem = {
      userId: parseInt(user.id), 
      productId: parseInt(productId),
      quantity: 1, 
      price: productPrice,
    };
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage.');
        return;
      }
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      };
  
      console.log('Adding to cart:', cartItem);
  
      const response = await axios.post('http://localhost:8083/carts', cartItem, config);
      console.log('Cart item added:', response.data);
  
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {error && (
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      )}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={8} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image="https://rpack.b-cdn.net/wp-content/uploads/2023/03/custom-coffee-tea-packaging-boxes.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="h6" component="div">
                  Price: £{product.price}
                </Typography>
                <Typography variant="h6" component="div">
                  Weight: {product.weight}g
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product.id, product.price)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
