import * as React from "react";
// import '../styles/home.css'
import DashboardNavigation from './DashboardNavigation.js'
import { Container } from '@mui/material';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Container component="main">
        <DashboardNavigation />
      </Container>
    </React.Fragment>
  );
}
