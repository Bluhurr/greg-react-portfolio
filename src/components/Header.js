import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    color: 'white',
  },
  appbar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    minHeight: '10vh',
    backdropFilter: "blur(10px)",
    //boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
  },
  container: {
    textAlign: 'center',
    zIndex: '1',
    position: 'relative',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  goDown: {
    color: 'cyan',
  },
  appbarWrapper: {
    width: "80%",
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  colorText: {
    color: 'cyan',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  })
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>Greg <span className={classes.colorText}>Lawrence</span></h1>
          <IconButton>
            <SortIcon className={classes.icon}/> 
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? {timeout: 1000} : {})} collapseHeight={50}>
        <div className={classes.container}>
          <h1>
             Front End<br/> 
             <span className={classes.colorText}>Web Developer</span>
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} fontSize="large"/>
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
