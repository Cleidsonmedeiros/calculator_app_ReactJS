import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'

export default function Calculator() {
    const [num, setNum]=useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e) {
      if (num === 0) {
        setNum(e.target.value);
      }else {
        setNum(num + e.target.value);
      }
    }

    function clear() {
      setNum(0);
    }

    function porcentage() {
      setNum(num / 100);
    }

    function changeSign() {
      if (num>0) {
        setNum(-num)
      }else {
        setNum(Math.abs(num))
      }
    }

    function operatorHandler(e) {
      var operatorInput = e.target.value;
      setOperator(operatorInput);
      setOldNum(num);
      setNum(0);
    }

    function calculate() {
      if (operator === "/") {
        setNum(parseFloat(oldnum) / parseFloat(num));
      } else if (operator === "X") {
        setNum(parseFloat(oldnum) * parseFloat(num));
      } else if (operator === "-") {
        setNum(parseFloat(oldnum) - parseFloat(num));
      } else if (operator === "+") {
        setNum(parseFloat(oldnum) + parseFloat(num));
      }
    }

  return (

    <div>
        <Box m={5}/>
        <Container maxWidth="xs">
            <div id="wrapper">
              <Box m={12}/>
                <h1 id="result">{num}</h1>
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={porcentage}>%</button>
                <button id="orange" onClick={operatorHandler} value={"/"}>/</button>
                <button id="gray" onClick={inputNum} value={7}>7</button>
                <button id="gray" onClick={inputNum} value={8}>8</button>
                <button id="gray" onClick={inputNum} value={9}>9</button>
                <button id="orange" onClick={operatorHandler} value={"X"}>X</button>
                <button id="gray" onClick={inputNum} value={4}>4</button>
                <button id="gray" onClick={inputNum} value={5}>5</button>
                <button id="gray" onClick={inputNum} value={6}>6</button>
                <button id="orange" onClick={operatorHandler} value={"-"}>-</button>
                <button id="gray" onClick={inputNum} value={1}>1</button>
                <button id="gray" onClick={inputNum} value={2}>2</button>
                <button id="gray" onClick={inputNum} value={3}>3</button>
                <button id="orange" onClick={operatorHandler} value={"+"}>+</button>
                <button id="gray" onClick={inputNum} value={0}>0</button>
                <button id="gray" onClick={inputNum} value={"."}>.</button>
                <button id="gray" style={{ visibility: "hidden" }}>.</button>
                <button id="orange" onClick={calculate}>=</button>
            </div>
        </Container>
    </div>
  )
}