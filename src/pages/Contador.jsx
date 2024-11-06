import { useState, useEffect } from 'react'

const Contador = ()=>{
    const [contador, setContador] = useState(0)

    function adicionar() {
        setContador( contador + 1 )
    }

    function diminuir() {
        setContador( contador - 1 )
    }

    return(
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={adicionar} >Adicionar</button>
            <button onClick={diminuir} >Diminuir</button>
        </>
    )
}

export default Contador;