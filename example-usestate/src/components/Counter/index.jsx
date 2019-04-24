import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>This is Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
