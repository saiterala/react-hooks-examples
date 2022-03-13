import React, { useReducer } from 'react';
import CalculatorInputs  from './CalculatorInputs';
import CalculatorContext from './CalculatorContext';

const Calculator = () => {
  const intialState = {
    a:0,
    b:0
  }
  const reducer = (state, action) =>{
    switch (action.type){
      case 'updateA':
        return { ...state, a:action.value };
      case 'updateB':
        return { ...state, b:action.value} ;
      case 'reset':
        return intialState;
      default:
        return state

    }
  }
  const [state, dispatch] = useReducer(reducer, intialState)
  const getResult = (a, b) => parseInt(a || 0) + parseInt(b || 0);
  
  return (
    <CalculatorContext.Provider value={dispatch} >
      <h1> This is Calculator</h1>
     <CalculatorInputs state={state} />

      <h2>
        {`${parseInt(state.a || 0)} + ${parseInt(state.b || 0)} = `}
        {getResult(state.a, state.b)}
      </h2>
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </CalculatorContext.Provider>
  );
};

export default Calculator;
