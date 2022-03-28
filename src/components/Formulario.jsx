import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { monedas } from "../data/monedas"
import { useSelectMonedas } from "../hooks/useSelectMonedas"
import { Error } from "./Error"

const InputSubmit = styled.input`
    width: 100%;
    padding: .625rem;
    margin-top: 1.875rem;
    background-color: #9497FF;
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;  
    border: none;
    border-radius: .3125rem;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export const Formulario = () => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCripto = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

            setCriptos(arrayCripto)
        }

        consultarApi();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([moneda, criptomoneda].includes('')) {
            setError(true)

            return
        }

        setError(false)
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptomoneda />

                <InputSubmit
                    type='submit'
                    value='Cotizar'
                />
            </form>
        </>
    )
}
