import React, { Fragment } from 'react'

const store = ['', '', '']

function Column() {

  return (
    <tr>
      <td>Tênis</td>
      <td>Roupas</td>
      <td>Bonés</td>      
    </tr>    
  )
}

function App() {
  
  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column />
    </Fragment>    
  )
  
  return (
    <table>

        {store.map(renderColumns)}

    </table>
    // ou podemos usar simplesmente <> </>
  )
}

export default App
