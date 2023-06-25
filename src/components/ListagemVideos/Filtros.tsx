"use client"

import { useState } from "react"
import { styled } from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const ContainerBotoes = styled.section`

`

interface ButtonProps {
  clicked: boolean;
}

const BotaoFiltro = styled.button<ButtonProps>`
  font-size: 15px;
  font-family: inherit;
  font-weight: 500;
  text-align: center;
  background: ${(props) => (props.clicked ? 'var(--azul)' : 'none')};
  border: ${(props) => (props.clicked ? 'none' : 'solid 1px var(--preto)')} ;
  border-radius: 16px;
  color:  ${(props) => (props.clicked ? '#eceef0' : 'var(--preto)')};
  padding: 5px 10px;
  margin: 10px 5px;
  cursor: pointer;
  
  &:hover {
    border-color: ${(props) => (props.clicked ? 'none' : 'var(--azul)')};
    color: ${(props) => (props.clicked ? 'none' : 'var(--azul)')};
  }
`

export const Filtros = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      <ContainerBotoes>
        <BotaoFiltro clicked={isClicked} onClick={handleClick}>Agências</BotaoFiltro>
        <BotaoFiltro clicked={isClicked} onClick={handleClick}>Chatbot</BotaoFiltro>
        <BotaoFiltro clicked={isClicked} onClick={handleClick}>Marketing Digital</BotaoFiltro>
        <BotaoFiltro clicked={isClicked} onClick={handleClick}>Gereção de Leads</BotaoFiltro>
        <BotaoFiltro clicked={isClicked} onClick={handleClick}>Mídia Paga</BotaoFiltro>
      </ContainerBotoes>
      <h2>aaaaaaaaa</h2>
    </Container>
  )
}
