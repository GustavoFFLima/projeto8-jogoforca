export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <div className="letras">
            <button onClick={test} data-test="letter" disabled>A</button>
            <button onClick={test} data-test="letter">B</button>
            <button data-test="letter">C</button>
            <button data-test="letter">D</button>
        </div>
    )
}

function test () {
    console.log("ok")
}