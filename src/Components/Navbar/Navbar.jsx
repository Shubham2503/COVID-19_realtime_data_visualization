import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { makeStyles, rgbToHex } from '@material-ui/core/styles';

  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
      color: '#000000'
    },
    toolbarTitle: {
      flexGrow: 1,
      color: '#000000'
    },
    link: {
      margin: theme.spacing(1, 1.5),
      color: '#000000'
    },
  }));
  export default function Pricing() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="red" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5" noWrap className={classes.toolbarTitle}>
              <Link variant="button" to="/" className={classes.link}>
              COVID - 19
              </Link>
            </Typography>
            <nav>
              <Link variant="button" to="/world" className={classes.link}>
                World
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
        
      </React.Fragment>
    );
  }