import { styled } from "styled-components"
import { BsCloudDownload } from "react-icons/bs"

const Botao = styled.button`
  margin-top: 8px;
  margin-right: 8px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 5px;
  }
`

interface Props {
  titulo: string
  corFonte?: string
  corFundo?: string
  corIcone?: string
}

export const BotaoDownload = ({ titulo, corFonte, corFundo, corIcone } : Props ) => {
  return (
    <Botao style={{color: corFonte, background: corFundo}}><BsCloudDownload size={20} color={corIcone}/>{titulo}</Botao>
  )
}
