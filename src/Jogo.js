export default function Jogo(){
    return (
        <div>
            <img data-test="game-image" src="./img/forca0.png" alt="imagem da forca"/>
            <div>
            <button data-test="choose-word">Escolher Palavra</button>
            <h1 data-test="word" data-answer="">_ _ _ _</h1>
            </div>
        </div>
    )
}