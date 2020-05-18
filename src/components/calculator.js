import React, { useState } from 'react';
import Display from './display';
import Keyboard from './keyboard';



import { evaluate } from 'mathjs';

import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



const Calculator = () => {

  const [equation, setEquation] = useState('');
  const [display, setDisplay] = useState('0');


  const handleDecimal = (e) => {

    if (equation === "" || equation.includes("=")) {
      let val = "0.";
      setDisplay(val);
      setEquation(val);

    } else if (equation.match(/[+*/-]$/)) {
      let val = "0.";
      setDisplay(val);
      setEquation(equation + val);

    } else if (!display.includes(".")) {
      setDisplay(display + e.currentTarget.value);
      setEquation(equation + e.currentTarget.value);
    }
  }

  const handleCalculate = () => {

    if (equation.includes("=")) {
      let val = `${display} = ${display}`
      setEquation(val)

    } else if (equation !== "" && equation.match(/[+\-*/]/) != null && equation.match(/[+\-*/]$/) == null) {
      let result = (Math.round(evaluate(equation) * 1000) / 1000)
      if (result >= 999999) {
        result = result.toExponential(3)
      }
      let resultStr = result.toString()
      let val = equation + "=" + resultStr
      setDisplay(resultStr)
      setEquation(val)
    }
  }

  const handleNumbers = (e) => {
    if (display.length <= 7) {
      if (
        equation.match(/[0-9.]$/) &&
        !equation.includes("=")
      ) {
        if (equation.match(/[+\-*/]/) == null) {
          let val = equation + e.currentTarget.value;
          setDisplay(val)
          setEquation(val)

        } else {
          setDisplay(display + e.currentTarget.value)
          setEquation(equation + e.currentTarget.value)
        }
      } else {
        if (equation.match(/[+\-*/]$/)) {
          let val = equation + e.currentTarget.value;
          setDisplay(e.currentTarget.value)
          setEquation(val)
        } else {
          if ((display === "0" && e.currentTarget.value !== "0") || equation.includes("=")) {
            setDisplay(e.currentTarget.value)
            setEquation(e.currentTarget.value)
            console.log("zero")
          }
        }
      }
    } else {
      window.alert("Max - 8 digits!");
    }
  }

  const handleAllClear = () => {
    setEquation('')
    setDisplay('0')
  }

  const handleClear = () => {
    if (display !== '0' && !equation.includes("=")) {
      let size = display.length
      let equ = equation.substring(0, equation.length - size);
      setDisplay('0')
      setEquation(equ)
    }
  }

  const handleDelete = () => {
    if (display.length >= 1) {
      const disp = display.substring(0, display.length - 1);
      const equ = equation.substring(0, equation.length - 1);
      setDisplay(disp)
      setEquation(equ)
    }
    if (display.length === 1) {
      setDisplay('0')
    }
  }

  const handleOperators = (e) => {
    if (equation.includes("=")) {
      let val = display;
      val += e.currentTarget.value;
      setEquation(val)
      setDisplay(e.currentTarget.value)

    } else if (equation !== "" && equation.match(/[*\-/+]$/) == null) {
      let val = equation;
      val += e.currentTarget.value;
      setEquation(val)
      setDisplay(e.currentTarget.value)

    } else if (equation.match(/[*\-/+]$/) != null) {
      let val = equation
      if (e.currentTarget.value === "-" && equation.match(/[*/+]$/) != null) {
        val += e.currentTarget.value
        setEquation(val)
        setDisplay(e.currentTarget.value)

      } else {
        val = val.substring(0, (val.length - 1))
        if (val.match(/[*/+]$/)) {
          val = val.substring(0, (val.length - 1))
        }
        val += e.currentTarget.value
        setEquation(val)
        setDisplay(e.currentTarget.value)
      }
    }
  }


  return (
    <Paper >
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Display
            equation={equation}
            display={display}
          />
        </Grid>
        <Grid item container >
          <Keyboard
            allClear={handleAllClear}
            clear={handleClear}
            del={handleDelete}
            numbers={handleNumbers}
            operators={handleOperators}
            decimal={handleDecimal}
            calculate={handleCalculate}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Calculator;