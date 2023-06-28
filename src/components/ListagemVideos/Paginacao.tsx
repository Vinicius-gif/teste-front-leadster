import Link from "next/link";
import { styled } from "styled-components";

interface Props {
  quantidade: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`

const Paragrafo = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-right: 10px;
  color: var(--preto);
`

const LinkCustom = styled(Link)`
  margin: 0px 10px;
  padding: 3px 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: var(--preto);

  &:hover {
    border-radius: 8px;
    border: solid 1px var(--azul);
    color: var(--azul);
  }
`

export const Paginacao = ( { quantidade } : Props) => {

  const array = Array.from(Array(quantidade).keys())

  return (
    <Container>
      <Paragrafo>Página</Paragrafo>

      {array.map((index) => (
        <LinkCustom href="" key={index}>{index + 1}</LinkCustom>
      ))}
    </Container>
  )
}
