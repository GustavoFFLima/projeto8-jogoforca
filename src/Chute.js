import React, { useState } from "react"

export default function Chute(props){
    function test(e){
        console.log(e)
        const texto = e
        props.setTextoInput(texto)
    }
    return(
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled={props.desabilitar} onChange={(e) =>test(e.target.value)}></input>
            <button data-test="guess-input" disabled={props.desabilitar} onClick={props.chutar}>Chutar</button>
        </div>
    )
}
