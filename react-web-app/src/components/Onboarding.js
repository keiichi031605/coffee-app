import * as React from "react";
import Header from './Header.js';
import '../styles/home.css'
import { Link } from "react-router-dom";
import { Box, Typography, Button } from '@mui/material';

export default function Onboarding() {

  return (
    <React.Fragment>
      <Header />
      <Box className="home-wrapper">
        <Typography className="home-text" variant="h3" component="h3" sx={{ color: 'white' }}>
          Coffee Improve Easy
        </Typography>
        <Typography className="home-text" variant="h5" component="h5" sx={{ color: 'gray' }}>
          Get the easy-cupping tool with manageable your roasting profile and cupping result to efficiently improve your daily workflow.
        </Typography>
        <Link to="/signup">
          <Button className="get-started-button" size="large" variant="contained" color="primary">
            Get Started
          </Button>
        </Link>
        <img
          className="home-image"
          src="/images/home-image.png"
          alt="home"
        />
      </Box>
    </React.Fragment>
  );
}
