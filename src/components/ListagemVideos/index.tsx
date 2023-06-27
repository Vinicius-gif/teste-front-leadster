"use client"

import { useState } from "react"
import { styled } from "styled-components"
import { CardVideo } from "./CardVideo"
import { BotaoFiltro } from "./BotaoFiltro"
import dadosVideos from '../../../public/dadosVideos.json'
import { SelectFiltro } from "./SelectFiltro"

const Container = styled.div`
  margin: 3% 18%;
`

const ContainerFiltros = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContainerBotoes = styled.section`

`

const ContainerVideos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 30px;
  margin: 20px 0px;
  border-bottom: solid 1px #c7bfbf;
  border-top: solid 1px #c7bfbf;
  padding: 40px 0px;
`

interface Ivideos {
  titulo: string,
  categoria: string
}

const categorias = [
  'Agências',
  'Chatbot',
  'Marketing Digital',
  'Gereção de Leads',
  'Mídia Paga'
]

export const UseVideos = () => {
  return dadosVideos;
}

export const getVideosFiltrados = (
  selectedCategory: string,
  existingVideos: Ivideos[]
): Ivideos[] => {
  if (!selectedCategory) return existingVideos
  return existingVideos.filter(video => video.categoria === selectedCategory)
}

export const ListagemVideos = () => {

  const videos = UseVideos();

  const [selectedCategory, setselectedCategory] = useState('');

  const handleClick = (categoria: string) => {
    if (categoria === selectedCategory) {
      setselectedCategory('')
      return
    }
    setselectedCategory(categoria);
  };

  const videosFiltrados = getVideosFiltrados(selectedCategory, videos);

  return (
    <Container>
      <ContainerFiltros>
        <ContainerBotoes>
          {categorias.map((categoria) => {
            const isActive = selectedCategory === categoria

            return (
              <BotaoFiltro $clicked={isActive} onClick={() => handleClick(categoria)} key={categoria}>{categoria}</BotaoFiltro>
            )
          })}
        </ContainerBotoes>
        <SelectFiltro/>
      </ContainerFiltros>
      <ContainerVideos>
        {videosFiltrados.map((video, index) => (
          <CardVideo key={index} title={video.titulo} content='conteúdo' />
        ))}
      </ContainerVideos>
    </Container>
  )
}
