import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterPlus = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleCounterPlus}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Counter;
