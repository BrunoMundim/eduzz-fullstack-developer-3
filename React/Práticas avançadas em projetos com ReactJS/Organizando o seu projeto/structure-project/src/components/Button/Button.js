import React from 'react'
import propTypes from 'prop-types'

function Button(props) {
  const { children, onClick } = props

  return(
    <button 
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.string.isRequired,
}

export default Button;