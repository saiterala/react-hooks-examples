import React, { useState } from 'react';

const Calculator = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const getResult = (a, b) => (
    parseInt(a || 0) + parseInt(b || 0)
  )
  return (
    <div>
      <h1> This is Calculator</h1>
      <p>
        <label htmlFor="">A: </label>
        <input
          type="text"
          value={inputA}
          onChange={e => setInputA(e.target.value)}
        />
        <br/>
        <label htmlFor="">B: </label>
        <input
          type="text"
          value={inputB}
          onChange={e => setInputB(e.target.value)}
        />
      </p>

      <h2>
        {`${inputA} + ${inputB} = `}{getResult(inputA,inputB)}
      </h2>
    </div>
  );
}

export default Calculator;
