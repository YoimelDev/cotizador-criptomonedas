import styled from "@emotion/styled"

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.875rem;
    color: #FFF;
    font-family: 'Lato', sans-serif;

`

const Texto = styled.p`
      font-size: 1.125rem;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 1.5rem;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 9.375rem;
`

export const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Imagen criptomoneda"
            />

            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}
