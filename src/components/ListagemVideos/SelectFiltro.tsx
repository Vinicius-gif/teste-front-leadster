import { styled } from "styled-components"

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  color: var(--preto);

  @media (max-width: 600px) {
    width: 100%;
    margin: 10px 10%;
  }
`
const Paragrafo = styled.p`
  font-weight: 500;
  font-size: 18px;
`

const BotaoSelect = styled.button`
  font-size: 15px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans";
  text-align: center;

  background: none;
  border:solid 1px var(--preto);
  border-radius: 16px;
  color: var(--preto);
  cursor: pointer;
  padding-left: 10px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    border-color: var(--azul);
    color: var(--azul);
  }
`

export const SelectFiltro = () => {

  return (
    <Container>
      <Paragrafo>Ordenar Por</Paragrafo>
      <BotaoSelect>
        <span>Data de Publicação</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path d="M12 14l-4-4h8z" />
        </svg>
      </BotaoSelect>
    </Container>
  )
}
