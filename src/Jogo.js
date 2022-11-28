import { useState } from "react";
import palavras from "./palavras";

export default function Jogo(props){
    return (
        <div className="jogo">
            <img data-test="game-image" src={props.errou} alt="imagem da forca"/>
            <button className="btn" data-test="choose-word" onClick={props.sortiarPalavra}>Escolher Palavra</button> 
            <h1 data-test="word" data-answer={props.salvandoPalavra} style={{ color: props.corPalavra }}>{props.revelando}</h1>    
        </div>
    )
}