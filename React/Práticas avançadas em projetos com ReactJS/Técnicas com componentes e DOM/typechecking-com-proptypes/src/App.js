import React from 'react';
import PetShop from './components/PetShop/PetShop';

function App() {

    const onClick = () => {
      alert('Iniciando o banho')
    }

  return (
    <PetShop
      dogs = {10}
      customers = {['Bruno, ', 'Marcao, ', 'Arthur, ', 'Elias']}
      customerName = 'Bruno Mundim'
      onClick = {onClick}
      status = 'Completed'
      shear = {true}
      scissors = {{
        scissor1: 'tosadora',
        scissor2: 'tubarão',
        dryer: 'gelado',
        cachorroMorde: true
      }}
    />
  );
}

export default App;
