import React, { useState, useEffect } from "react";
import '../styles/home.css'
import Onboarding from './Onboarding.js'
import Dashboard from './Dashboard.js'
import { Container } from '@mui/material';
// import { isLoggedIn as checkLoggedIn } from '../api/auth';
import { isLoggedIn } from '../api/auth';

export default function Home() {
  // const [isLoggedIn, setIsLoggedIn] = useState(checkLoggedIn());

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setIsLoggedIn(checkLoggedIn());
  //   };

  //   // Add event listener for local storage changes
  //   window.addEventListener('storage', handleStorageChange);

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);

  return (
    <React.Fragment>
      <Container component="main">
        { isLoggedIn() ? <Dashboard /> : <Onboarding /> }
      </Container>
    </React.Fragment>
  );
}
