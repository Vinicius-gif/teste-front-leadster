import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--fundo-banner);
  width: 100%;
  padding: 100px 0px;
`
const Webnar = styled.p`
  font-family: inherit;
  font-weight: 400;
  font-size: medium;
  color: var(--azul);
  border: solid 2px var(--azul);
  padding: 3px;
  border-radius: 12px 12px 12px 0px;
  margin: 5px;
`
const Paragrafo1 = styled.h2`
  font-family: inherit;
  font-weight: 600;
  font-size: 40px;
  color: var(--preto);
`
const Paragrafo2 = styled.h2`
  font-family: inherit;
  font-weight: 600;
  font-size: 60px;
  color: var(--azul);
  margin-left: 30px;
  border-bottom: solid 1px #cac1c1;
`
const Icone = styled.img`
  vertical-align: text-top;
`
const Paragrafo3 = styled.p`
  font-family: inherit;
  font-weight: 400;
  font-size: 13px;
  color: var(--preto);
  margin-left: 30px;
  padding-top: 15px;
`

export const Banner1 = () => {
  return (
      <Container>
        <Webnar>WEBNARS EXCLUSIVOS</Webnar>
        <Paragrafo1>Menos Conversinha,</Paragrafo1>
        <Paragrafo2>Mais Conversão<Icone src="/img/asset-header.png" alt="icone" /></Paragrafo2>
        <Paragrafo3>Conheça as estratégias que <strong>mudam o jogo</strong> e como aplicá-las no seu negócio</Paragrafo3>
      </Container>
  )
}
