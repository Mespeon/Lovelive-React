import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, Divider, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: drawerWidth,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));

const MenuDrawer = (props) => {
  const drawerData = props.data;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [side]: open});
  }

  const muse = drawerData.muse;
  const aqours = drawerData.aqours;

  const sideList = side => (
    <div className={classes.list} role='presentation' onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
      <Typography variant='overline' color='inherit'>Muse</Typography>
      <Divider/>
      <List>
        {muse.map(member => (
          <ListItem button key={member.name}>
            <ListItemText primary={member.name}/>
          </ListItem>
        ))}
      </List>

      <Typography variant='overline' color='inherit'>Aqours</Typography>
      <Divider/>
      <List>
        {aqours.map(member => (
          <ListItem button key={member.name}>
            <ListItemText primary={member.name}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <IconButton aria-label='menu' color='inherit' className={classes.menuButton} onClick={toggleDrawer('left', true)}><MenuIcon/></IconButton>
          <Typography variant='h6' color='inherit' className={classes.title}>{drawerData.title}</Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant='temporary' anchor='left' open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
