import React, { useState } from 'react';
import Counter from './components/Counter';
import Calculator from './components/Calculator';
const App = () => {
  const [mode, setMode] = useState(true);
  return (
    <div>
      {mode ? <Counter /> : <Calculator />}
      <button onClick={() => setMode(!mode)}>change mode</button>
    </div>
  );
};

export default App;
