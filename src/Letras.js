import Jogo from "./Jogo"


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(){

    function checaAcerto (selecionada) {
        
    }

    return(
        <div className="letras">
			{alfabeto.map(alfabeto => <button key={Math.random()} data-test="letter" >{alfabeto.toUpperCase()}</button>)}
        </div>
    )
}
