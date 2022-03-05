import React from 'react'
import propTypes from 'prop-types';

function PetShop (props) {

  const { dogs, cats, customers, customerName, onClick} = props

  return (
    <div>
      <h1>Dogs: {dogs}</h1>
      <h2>Cats: {cats}</h2>
      <div>
        Quantidade de clientes: {customers}
      </div>
      <div>
        Nome do cliente: {customerName}
      </div>
      <button onClick={onClick}>Iniciar banho</button>
    </div>
  )
}

PetShop.defaultProps = {
  cats: 0,
  customers: [],
}

PetShop.propTypes = {
  dogs: propTypes.number.isRequired,
  cats: propTypes.number,
  customers: propTypes.array,
  customerName: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  status: propTypes.oneOf(['Completed', 'Disabled']),
  shear: propTypes.bool,
  scissors: propTypes.object,
}

export default PetShop;