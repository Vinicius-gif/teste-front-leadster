import { styled } from "styled-components";

interface ButtonProps {
  $clicked: boolean;
}

const Botao = styled.button<ButtonProps>`
  font-size: 15px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans";
  text-align: center;
  background: ${(props) => (props.$clicked ? 'var(--azul)' : 'none')};
  border: ${(props) => (props.$clicked ? 'none' : 'solid 1px var(--preto)')} ;
  border-radius: 16px;
  color:  ${(props) => (props.$clicked ? '#eceef0' : 'var(--preto)')};
  padding: 5px 10px;
  margin: 5px;
  height: 40px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => (props.$clicked ? 'none' : 'var(--azul)')};
    color: ${(props) => (props.$clicked ? 'none' : 'var(--azul)')};
  }
`

interface Props {
  $clicked: boolean,
  onClick: () => void,
  children: any
}

export const BotaoFiltro = ({ $clicked, children, onClick }: Props) => {
  return (
    <Botao $clicked={$clicked} onClick={onClick}>{children}</Botao>
  )
}
