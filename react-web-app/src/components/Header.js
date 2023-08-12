import * as React from "react";
import '../styles/header.css'
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Grid, Tooltip, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

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
