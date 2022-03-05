import React, { useContext } from 'react'
import { ThemeContext } from '../theme/Theme'
import Form from '../Form/Form'

function Card() {
    const theme = useContext(ThemeContext)
    console.log('theme values: ', theme);

    return(
        <div style={{
            padding: '50px'
        }}>
            <Form />
            <button style={{ 
                background: theme.background, color: theme.color 
            }}>
                Card Button
            </button>
        </div>
    )
}

export default Card;