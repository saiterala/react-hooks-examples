import React, {  useReducer } from 'react';

const reducer = (state, action) => {
  switch(action){
    case 'Increment':
      return state+1;
    case 'Decrement':
      return state-1;
    case 'Reset':
      return 0;
    default:
      return state;
  }
}

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>This is Counter</h1>
      <p>Counter State : {count} </p>
      <button onClick={ () => dispatch('Increment')}>Increment</button>
      <button onClick={ () => dispatch('Decrement')}>Decrement</button>
      <button onClick={() => dispatch('Reset')}>Reset</button>
      {/* <button onClick{()=> this.setState({count: 0})}></button> */}
    </div>
  );
};

export default Counter;
