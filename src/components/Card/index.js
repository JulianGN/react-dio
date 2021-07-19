import Btn from "../Btn";
import {useState} from 'react';
// importando de maneira desestruturada, para pegar apenas o useState

const Card = () => {

    let [value, setValue] = useState(0);
    // sempre que utilizarmos o useState, definimos primeiro, dentro da array, o valor e a função que será usada para definir o novo valor. Do outro lado, chamamos o useState com o valor inicial dentro.

    function Add (){
        setValue(value + 1)
    }
    function Remove (){
        (value !== 0) ? setValue(value - 1) : (value = 0)
    }

    return (
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                
                <Btn
                    text="+"
                    color="success"
                    set={Add}
                />
                <p className="card-text">
                    {value}
                    {/* ao chamar o value, estamos chamando o estado inicial do useState (0) */}
                </p>
                <Btn
                    text="-"
                    color="secondary"
                    set={Remove}
                />

            </div>
        </div>
    )
}

export default Card;