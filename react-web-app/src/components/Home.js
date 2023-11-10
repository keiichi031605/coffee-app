import * as React from "react";
import '../styles/home.css'
import Onboarding from './Onboarding.js'
// import { Link } from "react-router-dom";
import { Container, Box, Typography, Button } from '@mui/material';

export default function Home() {

  return (
    <React.Fragment>
      <Container component="main">
        <Onboarding />
      </Container>
    </React.Fragment>
  );
}
