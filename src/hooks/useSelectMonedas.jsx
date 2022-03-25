import styled from "@emotion/styled"

const Label = styled.label`
    color: #FFF;
`

export const useSelectMonedas = (label) => {

    const selectMonedas = () => (
        <>
            <Label>{label}</Label>
        </>
    )

    return [selectMonedas]
}
