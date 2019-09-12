import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <IconButton aria-label='menu' color='inherit' className={classes.menuButton} onClick={() => { MenuDrawer() }}><MenuIcon/></IconButton>
          <Typography variant='h6' color='inherit' className={classes.title}>{props.value}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
