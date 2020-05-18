import React, { useState } from 'react';
import Calculator from './components/calculator';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Switch, Container, Box, CssBaseline, createMuiTheme } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles({
  boxStyles: {
    height: '100vh'
  },

  typographyStyles: {
    flex: 1
  },
})



const App = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#7986cb'
      }
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box display='flex' alignItems="center" className={classes.boxStyles}>
        <Container maxWidth="xs">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.typographyStyles}>
                Calculator
              </Typography>
              <Switch color='default' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </Toolbar>
          </AppBar>
          <Calculator />
        </Container>
      </Box>
    </ThemeProvider>
  )
}


export default App;
