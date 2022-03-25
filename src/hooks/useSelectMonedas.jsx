import styled from "@emotion/styled"

const Label = styled.label`
    color: #FFF;
`

export const useSelectMonedas = (label, opciones) => {

    const selectMonedas = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">Seleccione</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </select>
        </>
    )

    return [selectMonedas]
}
