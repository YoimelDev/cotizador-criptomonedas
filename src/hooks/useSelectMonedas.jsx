import styled from "@emotion/styled"

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

    const selectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select>
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

    return [selectMonedas]
}
