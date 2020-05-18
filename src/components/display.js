import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  paperStyles: {
    fontFamily: 'Roboto',
    border: 'none',
    borderBottomLeftRadius: '16%  25%',
    borderBottomRightRadius: '16% 25%',
    margin: 0,
    padding: '0 30px',
    height: 150,
  },

  h1Styles: {
    margin: 0,
    padding: '10px 0',
  },

  h2Styles: {
    margin: '0',
    padding: '16px 0 0 0',
    height: '40px',
    opacity: '70%',
    fontSize: '1.2rem',
  }

});

const Display = ({ equation, display }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.paperStyles} >
      <Typography variant="h6" align="right" >
        <h2 className={classes.h2Styles}>{equation}</h2>
      </Typography>
      <Typography variant="h4" align="right">
        <h1 className={classes.h1Styles}>{display}</h1>
      </Typography>
    </Paper>
  )

}


export default Display;