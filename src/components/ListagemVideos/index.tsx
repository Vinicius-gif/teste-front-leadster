import React from 'react'
import { styled } from 'styled-components'
import { Filtros } from './Filtros'

const Container = styled.div`

`

export const ListagemVideos = () => {
  return (
    <Container>
      <Filtros/>
    </Container>
  )
}
