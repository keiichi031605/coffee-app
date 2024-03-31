import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography } from '@mui/material';
import api from '../../api/api.js';
import { useNavigate } from "react-router-dom";

export default function NewCoffee() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [variety, setVariety] = useState('');
  const [price, setPrice] = useState('');
  const [process, setProcess] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post('/api/v1/coffees', {
        coffee: {
          name: name
        }
      });
      if (response?.data?.status?.code === 200) {
        navigate('/coffees');
      }

    } catch (error) {
      // if (error.response && error.response.status === 401) {
      //   setError('Invalid email or password. Please try again.');
      // } else {
      //   setError('Something went wrong. Please try again later.');
      // }
      console.error("Error with:", error.response || error);    
    }
  };

  return (
      <Container component="main" maxWidth="md">
        <Box
          component="form"
          onSubmit={handleSubmit}    
          sx={{
            width: '100%',
            mt: 1,
            p: 3,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="variety"
            label="Variety"
            name="variety"
            autoComplete="variety"
            autoFocus
            value={variety}
            onChange={(e) => setVariety(e.target.value)}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="process"
              label="process"
              type="process"
              id="process"
              autoComplete="process"
              value={process}
              onChange={(e) => setProcess(e.target.value)}   
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="price"
              label="price"
              type="price"
              id="price"
              autoComplete="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}   
            />
          </Box>
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            size="large"
          >
            Create
          </Button>
        </Box>
      </Container>
  );
}
