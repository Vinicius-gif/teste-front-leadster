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
  font-weight: 400;
  font-size: medium;
  color: var(--azul);
  border: solid 2px var(--azul);
  padding: 3px;
  border-radius: 12px 12px 12px 0px;
  margin: 5px;
`
const Paragrafo1 = styled.h2`
  font-weight: 600;
  font-size: 40px;
  color: var(--preto);
  
  @media (max-width: 600px) {
    font-size: 30px;
    text-align: center;
  }
`
const Paragrafo2 = styled.h2`
  background: linear-gradient(-45deg, #2c83fb, #1f76f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 65px;
  padding-bottom: 20px;
  border-bottom: solid 1px #cac1c1;

  @media (max-width: 600px) {
    font-size: 40px;
    text-align: center;
  }
`
const Icone = styled.img`
  margin-left: -28px;
  vertical-align: text-top;
  width: 50px;
  height: 32px;

  @media (max-width: 600px) {
    width: 40px;
    height: 22px;
    margin-left: -22px;
  }
`
const Paragrafo3 = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: var(--preto);
  padding-top: 15px;

  @media (max-width: 600px) {
    font-size: 11px;
    text-align: center;
  }
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
