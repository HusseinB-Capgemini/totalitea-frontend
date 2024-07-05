import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('http://localhost:8083/carts');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Error fetching cart items');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (cartItemId) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`http://localhost:8083/carts/${cartItemId}`, config);
      setCartItems(cartItems.filter(item => item.id !== cartItemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://rpack.b-cdn.net/wp-content/uploads/2023/03/custom-coffee-tea-packaging-boxes.jpg"
                  alt={item.productName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${item.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="secondary" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon fontSize="small" /> Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CartPage;
