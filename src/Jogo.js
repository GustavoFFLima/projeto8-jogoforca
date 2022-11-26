export default function Jogo(){
    return (
        <div className="jogo">
            <img data-test="game-image" src="./img/forca0.png" alt="imagem da forca"/>
            <div>
            <button data-test="choose-word">Escolher Palavra</button>
            <h1 data-test="word" data-answer="">_ a _ _ _</h1>
            </div>
        </div>
    )
}