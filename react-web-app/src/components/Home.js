import React from "react";
import '../styles/home.css'
import Wekcome from './Welcome.js'
import Dashboard from './Dashboard.js'
import { Container } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <React.Fragment>
      <Container component="main">
        { isLoggedIn ? <Dashboard /> : <Wekcome /> }
      </Container>
    </React.Fragment>
  );
}
