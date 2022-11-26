// import Jogo from "./Jogo"
// import Letras from "./Letras"
// import Chute from "./Chute"
import palavras from "./palavras"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let palavraSortiada = ""
let arrayPalavraSortiada = []
let revelandoPalavra = []

function App() {
  return (
    <>
      <div className="jogo">
          <img data-test="game-image" src={imagem} alt="imagem da forca"/>
          <div>
          <button data-test="choose-word" onClick={sortiarPalavra}>Escolher Palavra</button>
          <h1 data-test="word" data-answer=""></h1>
          </div>
      </div>
      <div className="letras">
		  	{alfabeto.map(alfabeto => <button key={Math.random()} onClick={() => checaAcerto()} data-test="letter" >{alfabeto.toUpperCase()}</button>)}
      </div>
      <div className="chute">
          <p>Já sei a palavra!</p>
          <input data-test="guess-input"></input>
          <button data-test="guess-input" >Chutar</button>
      </div>
    </>
  );
}

function sortiarPalavra(){
    console.log("ta indo")
    palavraSortiada = palavras[parseInt(Math.random() * palavras.length)]
    arrayPalavraSortiada = [...palavraSortiada]
    renderizarPalavra()
}

function renderizarPalavra(){
    for(let i = 0; i < arrayPalavraSortiada.length; i++){
        revelandoPalavra[i] = "_ "
    }
    // setrevelando(revelandoPalavra)
    console.log(arrayPalavraSortiada)
}
let erros = 0
let imagem = `./img/forca${erros}.png`

function checaAcerto () {}
export default App;

