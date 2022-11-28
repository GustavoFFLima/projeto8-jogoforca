import React, { useState } from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"

function App() {
  let palavraSortiada = ""
  let palavraocultada = []
  let letraClicada = []

  const [desabilitar, setDesabilitar] = useState(true)
  const [revelando, setrevelando] = useState(palavraSortiada)
  const [arrayPalavraSortiada, setArrayPalavraSortiada] = useState([])
  const [quantidadeErros, setQuantidadeErros] = useState(0)
  const [errou, setErrou] = useState(`./img/forca${quantidadeErros}.png`)

  function sortiarPalavra(){
      palavraSortiada = palavras[parseInt(Math.random() * palavras.length)]
      setArrayPalavraSortiada([...palavraSortiada])
      palavraocultada = [...palavraSortiada].map(ocultarPalavra)
      console.log(palavraocultada)
      setrevelando(palavraocultada)
      setDesabilitar(false)
  }

  function letraFoiClicada(letra){
    if(!letraClicada.includes(letra)){
      letraClicada.push(letra)
      let i = arrayPalavraSortiada.indexOf(letra)
      if(i !== -1){
        palavraocultada[i] = letra
        setrevelando(palavraocultada)
      }
    }
  }

  function ocultarPalavra(){
    return "_ "
  }

  function acertouLetra(letra){
    for(let i = 0; i < arrayPalavraSortiada.length; i++){
      if(letra === arrayPalavraSortiada[i]){
        palavraocultada[i] = letra
      }
    }
  }

  function errouLetra(){
    if(quantidadeErros <= 6){
      setQuantidadeErros(quantidadeErros + 1)
      setErrou(`./img/forca${quantidadeErros}.png`)
    } else {
      setDesabilitar(true)
    }
  }

  return (
    <>
      <Jogo revelando={revelando} sortiarPalavra={sortiarPalavra} errou={errou}/>
      <Letras arrayPalavraSortiada={arrayPalavraSortiada} letraFoiClicada={letraFoiClicada} errouLetra={errouLetra} acertouLetra={acertouLetra} desabilitar={desabilitar}/>
      <Chute />
    </>
  );
}

export default App;

