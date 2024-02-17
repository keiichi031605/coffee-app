import React, { useState, useEffect } from "react";
import '../styles/home.css'
import Onboarding from './Onboarding.js'
import Dashboard from './Dashboard.js'
import { Container } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <React.Fragment>
      <Container component="main">
        { isLoggedIn ? <Dashboard /> : <Onboarding /> }
      </Container>
    </React.Fragment>
  );
}
