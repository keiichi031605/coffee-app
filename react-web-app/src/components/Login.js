import React from 'react';
import { AppBar, Box, TextField, Button, Container, Typography, Link } from '@mui/material';
import api from '../api/api.js';

export default function Login() {
  // HTTP POST request to rails API for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        user: {
          email: e.target.email.value,
          password: e.target.password.value,
        },
      });

      if (response.data.status.code === 200) {
        console.log(response.data.status.message);
        // Store the user data or JWT token as needed.
        // Navigate or do some action after successful login.
      }
    } catch (error) {
      console.error("Error logging in:", error.response.data.status.message);
    }
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AppBar position="relative" color="transparent" elevation={0}>
            <Typography
              variant="h4"
              align="center"
              sx={{ 
                color: 'white', 
                fontWeight: 700
              }}
              mb={5}
            >
              Welcome back!<br />We exist to make entrepreneurship easier.
            </Typography>
          </AppBar>
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              size="large"
            >
              Sign In
            </Button>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Link variant="body2" href="#">
                Forgot password?
              </Link>
            </Box>
          </Box>
          <Box 
            sx={{
              mt: 5, 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2, 
              color: 'white'
            }}
          >
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
