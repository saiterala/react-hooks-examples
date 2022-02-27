import React, {useContext} from 'react'
import CalculatorContext from './CalculatorContext'

const CalculatorInputs = ({state}) => {
    const dispatch = useContext(CalculatorContext);
    return (
        <div>
            <p>
        <label>A: </label>
        <input
          type="text"
          value={state.a}
          onChange={e => dispatch({type:'updateA', value:e.target.value})}
        />
        <br />
        <label>B: </label>
        <input
          type="text"
          value={state.b}
          onChange={e => dispatch({type:'updateB', value:e.target.value})}
        />
      </p>
        </div>
    )
};

export default CalculatorInputs;