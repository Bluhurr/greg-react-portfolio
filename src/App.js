import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import MiddleContent from './components/MiddleContent';
import Footer from './components/Footer';
import PCEmbed from './components/PCEmbed';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/simon-lee-zft-W1kVEhg-unsplash.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <PCEmbed/>
      <Header/>
      <MiddleContent />
      <Footer />
    </div>
  );
};

export default App;
