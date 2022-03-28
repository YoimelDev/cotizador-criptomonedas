import styled from "@emotion/styled"
import { monedas } from "../data/monedas"
import { useSelectMonedas } from "../hooks/useSelectMonedas"

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

    const [moneda, SelectMonedas] = useSelectMonedas('Moneda', monedas)

    return (
        <form>
            <SelectMonedas />

            {moneda}

            <InputSubmit
                type='submit'
                value='Cotizar'
            />
        </form>
    )
}
