import React, { useContext } from 'react'
import { ThemeContext } from '../theme/Theme'

function Form () {
  
  const context = useContext(ThemeContext);

  const renderForm = (
    <form>
      <label> Nome: </label>
      <input />
      <label> Idade: </label>
      <input />
      <label> Profissão: </label>
      <input />
    </form>
  )

  const renderNotLogged = (
    <h1>
      É necessário realizar o login
    </h1>
  )

  return(
    <div>
      {!context.token ? renderNotLogged : renderForm}
    </div>   
  )
}

export default Form;