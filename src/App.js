import React, { useState } from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"

function App() {
  let palavraSortiada = ""
  let letraClicada = []
  let test1 = []
  let test3 = ""

  const [letraClicadaState, setLetraClicadaState] = useState([])
  const [palavraocultada, setPalavraocultada] = useState([])
  const [desabilitar, setDesabilitar] = useState(true)
  const [revelando, setRevelando] = useState(palavraSortiada)
  const [arrayPalavraSortiada, setArrayPalavraSortiada] = useState([])
  const [quantidadeErros, setQuantidadeErros] = useState(0)
  const [errou, setErrou] = useState(`./img/forca${quantidadeErros}.png`)
  const [textoInput, setTextoInput] = useState("")
  const [corPalavra, setCorPalavra] = useState("#000000")
  const [salvandoPalavra, setSalvandoPalavra] = useState("")
 
  if(!desabilitar){
    if(palavraocultada.length > 0 && !palavraocultada.includes("_ ")){
      setCorPalavra("#27AE60")
      setDesabilitar(true)
    } else if(quantidadeErros === 6){
      const cor = "#ff0000"
      revelar(cor)
      setDesabilitar(true)
    }
  }


  function sortiarPalavra(){
      palavraSortiada = palavras[parseInt(Math.random() * palavras.length)]
      setSalvandoPalavra(palavraSortiada)
      setArrayPalavraSortiada([...palavraSortiada])
      test1 = [...palavraSortiada].map(ocultarPalavra)
      setPalavraocultada(test1)
      setRevelando(test1)
      test3 = false
      setDesabilitar(test3)

      setLetraClicadaState([])
      setQuantidadeErros(0)
      setCorPalavra("#000000")
      setErrou(`./img/forca0.png`)
  }

  function letraFoiClicada(letra){
    letraClicada = [...letraClicadaState]
    if(quantidadeErros === 6){
      test3 = true
      setDesabilitar(test3)
    }
    if(!letraClicada.includes(letra)){
      letraClicada.push(letra)

        if(arrayPalavraSortiada.indexOf(letra) === -1){
          errouLetra()
        } else {
          acertouLetra(letra)
        }
    }
    setLetraClicadaState(letraClicada)
  }

  function ocultarPalavra(){
    return "_ "
  }
  
  let seguraPalavra = [...palavraocultada]

  function acertouLetra(letra){
    seguraPalavra = [...palavraocultada]
    for(let i = 0; i < arrayPalavraSortiada.length; i++){
      if(letra === arrayPalavraSortiada[i]){
        seguraPalavra[i] = letra
        }
    }
    setRevelando(seguraPalavra)
    setPalavraocultada(seguraPalavra)
  }

  function errouLetra(){
    if(quantidadeErros <= 5){
      setQuantidadeErros(quantidadeErros + 1)
      setErrou(`./img/forca${quantidadeErros + 1}.png`)
    } else {
      test3 = true
      setDesabilitar(test3)
    }
  }

  function chutar(){
    test3 = true
    setDesabilitar(test3)
   
    if(textoInput === salvandoPalavra){
      const cor =  "#27AE60"
      revelar(cor)
    } else {
      setErrou(`./img/forca6.png`)
      const cor = "#ff0000"
      revelar(cor)
    }
  }

  function revelar(cor){
    setCorPalavra(cor)
    setRevelando(salvandoPalavra)
    setPalavraocultada(salvandoPalavra)
  }
  return (
    <>
      <Jogo 
        revelando={revelando} sortiarPalavra={sortiarPalavra} errou={errou} corPalavra={corPalavra} salvandoPalavra={salvandoPalavra}
      />
      <Letras 
        arrayPalavraSortiada={arrayPalavraSortiada} letraFoiClicada={letraFoiClicada} errouLetra={errouLetra} acertouLetra={acertouLetra} desabilitar={desabilitar} letraClicada={letraClicadaState}
      />
      <Chute 
        chutar={chutar}
        setTextoInput={setTextoInput}
        desabilitar={desabilitar}
      />
    </>
  );
}

export default App;

