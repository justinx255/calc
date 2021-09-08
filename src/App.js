import logo from './logo.svg';
import './App.css';
import React, { useState, Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { cal: '', result: '' };
  }
  operators = ['+', '-', '*', '/'];
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  updateDisp = (value) => {
    if (

      (this.operators.includes(value) && this.state.cal === '') ||
      (this.operators.includes(value) && this.operators.includes(this.state.cal.slice(-1)))
    ) {
      return ''
    }
    console.log(this.operators.includes(this.state.cal.slice(-1)))
    this.setState({ cal:` ${this.state.cal}  ${value} `})
    console.log(this.state);
    
    if (!this.operators.includes(value)) {
      // eslint-disable-next-line no-eval
      let total = eval(this.state.cal + value).toString();

      this.setState = {
        result: `${total}`
      };
    }
    // console.log('hi')
  }

  calculate = () => {
    if (this.state.cal === '') {
      return 0
    }
    // eslint-disable-next-line no-eval
    let tot = eval(this.state.cal).toString();
    this.setState({
      result: `${tot}`
    })
  }


  render() {
    return (
      <div className="App">
        <div className='calculator'>
          <div className='display'>
            {this.state.result ? <span>{this.state.result}</span> : ''}
            {
              this.state.cal || "0"
            }
          </div>
          <div className='operators'>
            {this.operators.map((operator) => {
              return (
                <button onClick={() => {
                  this.updateDisp(operator.toString())
                }}>{operator}</button>
              )
            })}
            <button onClick={() => {
              this.setState({
                cal: ''
              });
              this.setState({
                result: ''
              });
            }}>DEL</button>
          </div>
          <div className='numbers'>
            {this.numbers.map((number) => {
              return <button onClick={() => {
                this.updateDisp(number.toString())
              }}>{number}</button>
            })
            }
            <button onClick={
              () => {
                this.updateDisp('0')
              }
            }>0</button>
            <button onClick={
              () => {
                this.updateDisp('.')
              }
            }>.</button>
            <button className='equal' style={{
              backgroundColor: "#F8485E",
              fontWeight: 'bold'
            }} onClick={() => {
              this.calculate()
            }}>=</button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;


// export default function App() {
//   const [cal, SetCal] = useState('')
//   const [result, SetResult] = useState('')
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const operators = ['+', '-', '*', '/'];
//   const updateDisp = value => {
//     if (
//       (operators.includes(value) && cal === '') ||
//       (operators.includes(value) && operators.includes(cal.slice(-1)))
//     ) {
//       // console.log('dude')

//       return
//     }
//     SetCal(cal + value);
//     if (!operators.includes(value)) {
//       // eslint-disable-next-line no-eval
//       SetResult(eval(cal + value).toString());
//     }
//     // console.log('hi')
//   }
//   const calculate = () => {
//     if(cal===''){
//       return 0
//     }
//     // eslint-disable-next-line no-eval
//     SetCal(eval(cal).toString());
//   }
//   return (
//     <div className="App">
//       <div className='calculator'>
//         <div className='display'>
//           {result ? <span>{result}</span> : ''}
//           {
//             cal || "0"
//           }

//         </div>
//         <div className='operators'>
//           {operators.map((operator) => {
//             return (
//               <button onClick={() => {
//                 updateDisp(operator.toString())
//               }}>{operator}</button>
//             )
//           })}
//           <button onClick={() => {
//             SetCal('');
//             SetResult('')
//           }}>DEL</button>
//         </div>
//         <div className='numbers'>
//           {
//             numbers.map((number) => {
//               return <button onClick={() => {
//                 updateDisp(number.toString())
//               }}>{number}</button>
//             })
//           }
//           <button onClick={
//             () => {
//               updateDisp('0')
//             }
//           }>0</button>
//           <button onClick={
//             () => {
//               updateDisp('.')
//             }
//           }>.</button>
//           <button  className='equal' style={{
//              backgroundColor: "#F8485E",
//              fontWeight:'bold'
//           }} onClick={
//             calculate
//           }>=</button>
//         </div>

//       </div>
//     </div>
//   );
// }

