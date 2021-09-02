import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [cal, SetCal] = useState('')
  const [result, SetResult] = useState('')
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ['+', '-', '*', '/'];
  const updateDisp = value => {
    if (
      (operators.includes(value) && cal === '') ||
      (operators.includes(value) && operators.includes(cal.slice(-1)))
    ) {
      // console.log('dude')

      return
    }
    SetCal(cal + value);
    if (!operators.includes(value)) {
      // eslint-disable-next-line no-eval
      SetResult(eval(cal + value).toString());
    }
    // console.log('hi')
  }
  const calculate = () => {
    if(cal===''){
      return 0
    }
    // eslint-disable-next-line no-eval
    SetCal(eval(cal).toString());
  }
  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {result ? <span>{result}</span> : ''}
          {
            cal || "0"
          }

        </div>
        <div className='operators'>
          {operators.map((operator) => {
            return (
              <button onClick={() => {
                updateDisp(operator.toString())
              }}>{operator}</button>
            )
          })}
          <button onClick={() => {
            SetCal('');
            SetResult('')
          }}>DEL</button>
        </div>
        <div className='numbers'>
          {
            numbers.map((number) => {
              return <button onClick={() => {
                updateDisp(number.toString())
              }}>{number}</button>
            })
          }
          <button onClick={
            () => {
              updateDisp('0')
            }
          }>0</button>
          <button onClick={
            () => {
              updateDisp('.')
            }
          }>.</button>
          <button  className='equal' style={{
             backgroundColor: "#F8485E",
             fontWeight:'bold'
          }} onClick={
            calculate
          }>=</button>
        </div>

      </div>
    </div>
  );
}

