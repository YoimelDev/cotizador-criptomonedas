import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import imagenCripto from './img/imagen-criptos.png'
import { Formulario } from './components/Formulario'
import { Resultado } from './components/Resultado'

const Contenedor = styled.div`
  max-width: 56.25rem;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  display: block;
  max-width: 25rem;
  width: 80%;
  margin: 6.25rem auto 0 auto;
`

const Heading = styled.h1`
  margin-top: 5ren;
  margin-bottom: 5rem;
  text-align: center;
  font-family: 'Lato', sans-serif;  
  font-size: 2.125rem;
  font-weight: 700;
  color: #FFF;

  &::after {
    content: '';
    display: block;
    width: 6.25rem;
    height: 0.375rem;
    margin: 0.625rem auto 0 auto;
    background-color: #66A2FE;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        const { moneda, criptomoneda } = monedas

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
      }

      cotizarCripto()
    }
  }, [monedas])


  return (
    <Contenedor>
      <Imagen
        src={imagenCripto}
        alt='imagenes criptomonedas'
      />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario
          setMonedas={setMonedas}
        />

        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>

    </Contenedor>
  )
}

export default App
