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
`

const ContainerFiltros = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContainerBotoes = styled.section``

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
