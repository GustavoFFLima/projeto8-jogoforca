import React, { useState } from "react"

export default function Chute(){
    return(
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input"></input>
            <button data-test="guess-input" >Chutar</button>
        </div>
    )
};
