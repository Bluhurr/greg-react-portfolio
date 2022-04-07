import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  frame: {
    width: '100%',
    height: '120vh',
    position: 'absolute',
  },
}));

const  PCEmbed = () => {
  const classes = useStyles();

  return (
    <iframe className={classes.frame} frameborder="0" scrolling="no" allowtransparency='true' src="https://playcanv.as/e/p/HobsEJjH/" />
  );
};

export default PCEmbed;
