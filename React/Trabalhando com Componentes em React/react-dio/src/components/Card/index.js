import { useState } from "react";
import Button from '../Button/index'

const Card = () => {
    
    const [value, setValue] = useState(0);

    function Add() {
        setValue(value + 1);
    }

    function Sub() {
        setValue(value - 1);
    }

    return(
        <div className="card">
            <h5 className="card-header">
                Meu primeiro card
            </h5>
            <div className="card-body">
                <Button
                    className = "btn btn-success"
                    onClick = {Add}
                >
                    Adicionar
                </Button>

                <Button
                    className = "btn btn-danger"
                    onClick = {Sub}
                >
                    Subtrair
                </Button>

                <p>
                    {value}
                </p>
            </div>
        </div>
    )
}

export default Card;