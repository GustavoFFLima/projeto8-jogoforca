// import { useState } from "react";
// import palavras from "./palavras";

// let palavraSortiada = ""
// let arrayPalavraSortiada = []
// let revelandoPalavra = []

// export default function Jogo(){
//     const [revelando, setrevelando] = useState(palavraSortiada)

//     function sortiarPalavra(){
//         console.log("ta indo")
//         palavraSortiada = palavras[parseInt(Math.random() * palavras.length)]
//         arrayPalavraSortiada = [...palavraSortiada]
//         renderizarPalavra()
//     }

//     function renderizarPalavra(){
//         for(let i = 0; i < arrayPalavraSortiada.length; i++){
//             revelandoPalavra[i] = "_ "
//         }
//         setrevelando(revelandoPalavra)
//         console.log(arrayPalavraSortiada)
//     }
//     let erros = 0
//     let imagem = `./img/forca${erros}.png`

//     return (
//         <div className="jogo">
//             <img data-test="game-image" src={imagem} alt="imagem da forca"/>
//             <div>
//             <button data-test="choose-word" onClick={sortiarPalavra}>Escolher Palavra</button>
//             <h1 data-test="word" data-answer="">{revelando}</h1>
//             </div>
//         </div>
//     )
// }