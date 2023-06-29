import Image from "next/image"
import { styled } from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--fundo-banner);
  width: 100%;
  padding-top: 25px;
`

const ImagemComparativo = styled.img`
  width: 600px;
  height: 500px;
  margin: 0px 50px 0px 0px;
`

const ContainerLeads = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Titulo = styled.h2`
  max-width: 450px;
  font-size: 35px;
  color: var(--preto);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 8px;
`
const Subtitulo = styled.h3`
  color: var(--preto);
  font-size: 20px;
  font-weight: 400;
  border-bottom: solid 1px #bbd0df;
  padding-bottom: 15px;
  padding-right: 300px;
  margin-bottom: 20px;
`
const ContainerBotao = styled.div`
  display: flex;
`

const Botao = styled.button`
  border: none;
  border-radius: 45px;
  color: #ffffff;
  background: var(--azul);
  font-weight: 600;
  cursor: pointer;
  padding: 14px 30px;
  font-size: 20px;
  margin-right: 20px;
`

const ContainerAvaliacao = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
const Paragrafo = styled.p`
  margin-left: 5px;
  margin-right: 5px;
`
export const BannerLeads = () => {
  return (
    <Container>
      <ImagemComparativo src="/img/comparativo.png" alt="Imagem do comparativo"/>
      <ContainerLeads>
            <Titulo>Pronto para triplicar sua <br/> <b>Geração de Leads?</b></Titulo>
            <Subtitulo>Criação e ativação em <b>4 minutos.</b></Subtitulo>
          <ContainerBotao>
            <Botao>Ver Demonstração</Botao>
            <Image src="/img/selo.png" alt="selo" width={205} height={73}/>
          </ContainerBotao>
          <ContainerAvaliacao>
              <Image src="/img/no-card-dark.webp" alt="icone cartão" width={16} height={16}/>
              <Paragrafo>Não é necessário cartão de crédito | </Paragrafo>
              <Image src="/img/rating.webp" alt="icone de estrelas de avaliação" width={96} height={16}/>
              <Paragrafo><b> 4.9</b>/5 - Média de satisfação</Paragrafo>
          </ContainerAvaliacao>
      </ContainerLeads>
    </Container>
  )
}

