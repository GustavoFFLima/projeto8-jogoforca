import Jogo from "./Jogo"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(props){
    function checarLetra(letra){
        props.letraFoiClicada(letra)             
    }
    return(
        <div className="letras">
			{alfabeto.map(alfabeto => <button key={alfabeto} disabled={props.desabilitar || props.letraClicada.includes(alfabeto)} data-test="letter" onClick={() => checarLetra(alfabeto)}>{alfabeto.toUpperCase()}</button>)}
        </div>
    )
}
