import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '70vh',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2rem',
    marginLeft: '2rem',
  },
  myCard: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    minWidth: '25vw',
    height: '50vh',
    backgroundColor: '#eee',
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const MiddleContent = () => {
  const classes = useStyles();

  return(
    <Paper className={classes.root}>
      <Card elevation={5} className={classes.myCard}>
        <Typography variant='h5'>Cool</Typography>
      </Card>
      <Card elevation={5} className={classes.myCard}>
        <Typography variant='h5'>Interesting</Typography>
      </Card>
      <Card elevation={5} className={classes.myCard}>
        <Typography variant='h5'>...Humble</Typography>
      </Card>
    </Paper>
  );
};

export default MiddleContent;
