import React from 'react'
import PropTypes from 'prop-types'

function Calc(props) {
  const { min, max, onChange } = props;

  return(
    <div>
      Valor mínimo: {min}
      <br/>
      Valor máximo: {max}
      <input type='text' onChange={onChange}/>
    </div>
  )
}

Calc.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Calc;