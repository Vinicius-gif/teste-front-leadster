"use client"

import { useState } from "react"
import { styled } from "styled-components"
import { CardVideo } from "./CardVideo"
import { BotaoFiltro } from "./BotaoFiltro"

const Container = styled.div`
  margin: 3% 15%;
`

const ContainerFiltros = styled.div`
  display: flex;
  justify-content: space-between;
`

const ContainerBotoes = styled.section`

`

const ContainerVideos = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface Ivideos {
  titulo: string,
  categoria: string,
  url: string
}

const videos = [
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Agências', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Agências', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Chatbot', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Chatbot', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Chatbot', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Marketing Digital', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Marketing Digital', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Gereção de Leads', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Gereção de Leads', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Mídia Paga', url: 'https://url' },
  { titulo: 'Como aumentar sua Gereação de Leads feat. Traktor', categoria: 'Mídia Paga', url: 'https://url' },
]

const categorias = [
  'Agências',
  'Chatbot',
  'Marketing Digital',
  'Gereção de Leads',
  'Mídia Paga'
]

export const UseVideos = () => {
  return videos;
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
        <h2>aaaaaaaaa</h2>
      </ContainerFiltros>
      <ContainerVideos>
        {videosFiltrados.map((video, index) => (
          <CardVideo key={index} title={video.titulo} content='conteúdo' />
        ))}
      </ContainerVideos>
    </Container>
  )
}