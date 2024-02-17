import * as React from "react";
import '../styles/home.css'
import Onboarding from './Onboarding.js'
import Dashboard from './Dashboard.js'
import { Container } from '@mui/material';
import { isLoggedIn } from '../api/auth';

export default function Home() {
  return (
    <React.Fragment>
      <Container component="main">
      { isLoggedIn ?
        <Dashboard />
      :
        <Onboarding />
      }
      </Container>
    </React.Fragment>
  );
}
