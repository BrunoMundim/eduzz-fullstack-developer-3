import React, { useState } from 'react'
import Button from './Component/Button/Button';
import Calc from './Component/Calc/Calc';

function App() {

  const [value, setValue] = useState(0)
  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)
  
  const handleClick = () => {
    setMin(10)
    setMax(max + 1)
  }

  const handleCalc = ({ target }) => {
    const value = target.value
    setValue(min + max + value)
  }

  return(
    <>
      <div>
        <Button onClick={handleClick}>
        Aumentar máximo
        </Button>
      </div>      
      <br />
      <div>
        <h1>Valor calculado: {value}</h1>
        <Calc 
          min={min}
          max={max}
          onChange={handleCalc}
        />
      </div>
      
    </>
  )
}

export default App;
