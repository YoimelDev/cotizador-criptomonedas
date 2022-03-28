import styled from '@emotion/styled'

const Texto = styled.div`
    padding: .9375rem;
    background-color: #B7322C;
    color: #fff;
    font-size: 1.375rem;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
`

export const Error = ({ children }) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}
