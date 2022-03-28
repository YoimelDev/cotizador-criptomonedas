import styled from "@emotion/styled"
import { useState, useEffect } from "react"

const Label = styled.label`
    display: block;
    margin: .9375rem 0;
    color: #FFF;   
    font-family: 'lato', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
`
const Select = styled.select`
    width: 100%;
    padding: .875rem;
    font-size: 1.125rem;
    border-radius: .625rem;
`

export const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            console.log(resultado);
        }

        consultarApi();
    }, [])


    const selectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

    return [state, selectMonedas]
}
