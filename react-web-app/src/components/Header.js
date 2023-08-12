import * as React from "react";
import '../styles/header.css'
// import { AppBar, sBox, TextField, Button, Container, CssBaseline, Typography, Link } from '@mui/material';

import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const lightColor = 'rgba(255, 255, 255, 0.7)';

export default function Header() {

  return (
    <React.Fragment>
      <AppBar
        className="app-bar"
        style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              {/* <Typography color="inherit" variant="h5" component="h1">
                <Avatar src="/images/coffee-app.png" alt="Logo" />
              </Typography> */}
              <Link to="/" className="logo">
                <img
                  className="logo"
                  src="/images/coffee-app.png"
                  alt="logo"
                />
              </Link>
            </Grid>
            <Grid item>
              <Button className="login-button" variant="outlined" color="primary">
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button className="sign-up-button" variant="contained" color="primary">
                Sign up
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
