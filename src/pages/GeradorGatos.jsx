import {useState, useEffect} from 'react'

const GeradorGatos = ()=>{
    const [dados, setDados] = useState('')

    useEffect(()=>{
        const getApi = async ()=>{
            try {
                const resposta = await fetch('https://api.thecatapi.com/v1/images/search')
                if (resposta.status !== 200) {
                    throw new Error("Erro ao buscar o gatinho");
                }
                const dados = await resposta.json()
                setDados(dados[0].url)

            } catch (error) {
                console.log(error.message)
            }
        }

        getApi()
    }, [])

    return(
        <>
            <h1>GeradorGatos</h1>
            
            {dados !== '' && (
                <>
                    <img width='300' src={dados} alt="Gatinho" />
                    <p>Recarregue a pagina para mudar o Gatinho</p>
                </>
            )}
        </>
    )
}

export default GeradorGatos;