import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    margin: '0',
    padding: '0',
    marginTop: '10rem',
    minHeight: '8vh',
  },
})); 

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>Footer</div>
  );

};

export default Footer;
