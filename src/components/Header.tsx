import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 160px;
`

const Logo = styled.img``

export const Header = () => {
  return (
    <Cabecalho>
      <Logo src="/img/logo.png" alt='Logotipo da leadster' />
    </Cabecalho>
  )
}
