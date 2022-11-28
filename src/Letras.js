import Jogo from "./Jogo"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(props){
    function checarLetra(letra){
        let letraSelecionada = props.arrayPalavraSortiada.includes(letra)
        if(letraSelecionada){
            console.log("acertou a letra", letra, props.arrayPalavraSortiada)
            props.acertouLetra(letra)
        } else {
            console.log("errou a letra", letra, props.arrayPalavraSortiada)
            props.errouLetra()
        }
        }

    return(
        <div className="letras">
			{alfabeto.map(alfabeto => <button key={Math.random()} data-test="letter" onClick={() => checarLetra(alfabeto)}>{alfabeto.toUpperCase()}</button>)}
        </div>
    )
}
