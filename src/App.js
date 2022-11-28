import React, { useState } from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"

function App() {
  let palavraSortiada = ""
  let palavraocultada = []

  const [revelando, setrevelando] = useState(palavraSortiada)
  const [arrayPalavraSortiada, setArrayPalavraSortiada] = useState([])
  const [quantidadeErros, setQuantidadeErros] = useState(0)
  const [errou, setErrou] = useState(`./img/forca${quantidadeErros}.png`)

  function sortiarPalavra(){
      palavraSortiada = palavras[parseInt(Math.random() * palavras.length)]
      setArrayPalavraSortiada([...palavraSortiada])
      palavraocultada = arrayPalavraSortiada.map(ocultarPalavra)
      console.log(palavraocultada)
      setrevelando(palavraocultada)
      console.log(arrayPalavraSortiada)
  }

  function ocultarPalavra(){
    return "_ "
  }

  function acertouLetra(letra){
    for(let i = 0; i < arrayPalavraSortiada.length; i++){
      if(letra === arrayPalavraSortiada[i]){
        palavraocultada[i] = letra
        console.log(palavraocultada)
      }
    }
  }

  function errouLetra(){
    if(quantidadeErros <= 6){
      setQuantidadeErros(quantidadeErros + 1)
      console.log(quantidadeErros)
      setErrou(`./img/forca${quantidadeErros}.png`)
    }
  }

  return (
    <>
      <Jogo revelando={revelando} sortiarPalavra={sortiarPalavra} errou={errou}/>
      <Letras arrayPalavraSortiada={arrayPalavraSortiada} errouLetra={errouLetra} acertouLetra={acertouLetra}/>
      <Chute />
    </>
  );
}

export default App;

