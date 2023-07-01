"use client"

import { useState } from "react"
import { styled } from "styled-components"
import { CardVideo } from "./CardVideo"
import { BotaoFiltro } from "./BotaoFiltro"
import { SelectFiltro } from "./SelectFiltro"
import { Paginacao } from "./Paginacao"
import { useVideos } from "@/hooks/useVideos"
import { useFiltrarVideos } from "@/hooks/useFiltrarVideos"
import dadosCategorias from "../../../public/dadosCategorias.json"
import { useModal } from "@/hooks/useModal"
import { Modal } from "./Modal"

const Container = styled.div`
  margin: 3% 18%;

  @media (max-width: 600px) {
    margin: 0%;
  }
`

const ContainerFiltros = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-flow: row wrap;
    justify-content: center;
  }
`

const ContainerBotoes = styled.section`

  @media (max-width: 600px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
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

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`

export const ListagemVideos = () => {

  const videos = useVideos();

  const { showModal, handleOpenModal, handleCloseModal } = useModal();

  const [selectedCategory, setselectedCategory] = useState('');

  const handleClick = (categoria: string) => {
    if (categoria === selectedCategory) {
      setselectedCategory('')
      return
    }
    setselectedCategory(categoria);
  };

  const videosFiltrados = useFiltrarVideos(selectedCategory, videos);

  return (
    <Container>
      <ContainerFiltros>
        <ContainerBotoes>
          {dadosCategorias.map((categoria) => {
            const isActive = selectedCategory === categoria

            return (
              <BotaoFiltro $clicked={isActive} onClick={() => handleClick(categoria)} key={categoria}>{categoria}</BotaoFiltro>
            )
          })}
        </ContainerBotoes>
        <SelectFiltro />
      </ContainerFiltros>
      <ContainerVideos>
        {videosFiltrados.map((video, index) => (
          <CardVideo onClick={handleOpenModal} key={index} title={video.titulo} />
        ))}
        {showModal && <Modal onClose={handleCloseModal}/> }
      </ContainerVideos>
      <Paginacao quantidade={4} />
    </Container>
  )
}
