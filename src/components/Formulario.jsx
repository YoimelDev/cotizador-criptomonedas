import styled from "@emotion/styled"

const InputSubmit = styled.input`
    width: 100%;
    padding: .625rem;
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
    return (
        <form>
            <InputSubmit
                type='submit'
                value='Cotizar'
            />
        </form>
    )
}
