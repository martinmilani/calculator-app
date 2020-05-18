import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';

const useStyles = makeStyles({
  buttonStyles: {
    width: '100%'
  },

  itemStyles: {
    marginBottom: '1.75em'
  },

  containerStyles: {
    padding: '1.75em 1em 0em 1em'
  },

  equalStyles: {
    backgroundColor: '#674CE8'
  },

  favStyles: {
    marginLeft: '20%'
  }

});


const Keyboard = ({ numbers, allClear, clear, operators, del, calculate, decimal }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.containerStyles}>

      <Grid item xs={3} className={classes.itemStyles} >
        <Button
          id="clear"
          value="clear"
          onClick={clear}
          className={classes.buttonStyles}
        >
          <Typography variant='h4' color='primary'>C</Typography>

        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="AllClear"
          className={classes.buttonStyles}
          value="AllClear"
          onClick={allClear}
        ><Typography variant='h4' color='primary'>AC</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <IconButton
          style={{ padding: '6px 8px', borderRadius: '0' }}
          id="delete"
          className={classes.buttonStyles}
          value="del"
          onClick={del}
        ><Typography variant='h4' color='primary' >
            <BackspaceOutlinedIcon />
          </Typography>
        </IconButton>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="divide"
          className={classes.buttonStyles}
          value="/"
          onClick={operators}
        ><Typography variant='h4' color='primary'>/</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="seven"
          className={classes.buttonStyles}
          value="7"
          onClick={numbers}
        ><Typography variant='h4'>7</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="eight"
          className={classes.buttonStyles}
          value="8"
          onClick={numbers}
        ><Typography variant='h4'>8</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="nine"
          className={classes.buttonStyles}
          value="9"
          onClick={numbers}
        ><Typography variant='h4'>9</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="multiply"
          className={classes.buttonStyles}
          value="*"
          onClick={operators}
        ><Typography variant='h4' color='primary'>*</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="four"
          className={classes.buttonStyles}
          value="4"
          onClick={numbers}
        ><Typography variant='h4'>4</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="five"
          className={classes.buttonStyles}
          value="5"
          onClick={numbers}
        ><Typography variant='h4'>5</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="six"
          className={classes.buttonStyles}
          value="6"
          onClick={numbers}
        ><Typography variant='h4'>6</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="add"
          className={classes.buttonStyles}
          value="+"
          onClick={operators}
        ><Typography variant='h4' color='primary'>+</Typography>{" "}
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="one"
          className={classes.buttonStyles}
          value="1"
          onClick={numbers}
        ><Typography variant='h4'>1</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="two"
          className={classes.buttonStyles}
          value="2"
          onClick={numbers}
        ><Typography variant='h4'>2</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="three"
          className={classes.buttonStyles}
          value="3"
          onClick={numbers}
        ><Typography variant='h4'>3</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="subtract"
          className={classes.buttonStyles}
          value="-"
          onClick={operators}
        ><Typography variant='h4' color='primary'>-</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="zero"
          className={classes.buttonStyles}
          value="0"
          onClick={numbers}
        ><Typography variant='h4'>0</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.itemStyles}>
        <Button
          id="decimal"
          className={classes.buttonStyles}
          value="."
          onClick={decimal}
        ><Typography variant='h4'>.</Typography>
        </Button>
      </Grid>

      <Grid item xs={3} />

      <Grid item xs={3} className={classes.itemStyles} justify="flex-end" >
        <Fab
          id="equals"
          value="="
          onClick={calculate}
          color='secondary'
          size='large'
          className={classes.favStyles}
        ><Typography variant='h4'>=</Typography>
        </Fab>
      </Grid>

    </Grid >
  )
}

export default Keyboard;