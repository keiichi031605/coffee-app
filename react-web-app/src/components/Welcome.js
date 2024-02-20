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
          Lorem Ipsum
        </Typography>
        <Typography className="home-text" variant="h5" component="h5" sx={{ color: 'gray' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </Typography>
        <Link to="/sign-up">
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
