import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let palavraSortiada = ""
let arrayPalavraSortiada = []
let revelandoPalavra = []

function App() {
  return (
    <>
      <Jogo />
      <Letras />
      <Chute />
    </>
  );
}

export default App;

