import { useState } from "react";
import palavras from "./palavras";

export default function Jogo(props){
    return (
        <>
            <div className="jogo">
               <img data-test="game-image" src={props.errou} alt="imagem da forca"/>
               <h1 data-test="word" data-answer="">{props.revelando}</h1>
            </div> 
            <button className="btn" data-test="choose-word" onClick={props.sortiarPalavra}>Escolher Palavra</button>    
        </>
    )
}