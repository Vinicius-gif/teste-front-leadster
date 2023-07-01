import Link from "next/link"
import { styled } from "styled-components"
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs'

const FooterCustom = styled.footer`
  width: 100%;

`
const FooterTop = styled.div`
  width: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
`
const Conteudo = styled.div`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`

const TituloFooter = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const Subtitulo = styled.p`
  color: var(--cinza);
  font-weight: 500;
  font-size: 15px;
`

const ListagemLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const ListaLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`
const TituloLinks = styled.p`
  color: var(--preto);
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
`

const LinkCustom = styled(Link)`
  text-decoration: none;
  color: var(--cinza);
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }

  &:hover {
    color: var(--azul);
  }
`

const IconesRedes = styled.div`
  display: flex;

  > * {
    margin: 0px 5px 5px 20px;
  }
`

const ParagrafoContatos = styled.div`
  margin-bottom: 50px;

  & p {
    margin: 10px;

    @media (max-width: 600px) {
      margin: 10px 0px;
    }
  }
  
`
const FooterBot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 27px 0px;
  border-top: solid 1px #e0dfdf;
`

const ParagrafoTemos = styled.p`
  color: var(--cinza);
  font-size: 14px;
  margin-left: 40px;
  margin-right: 40px;

  & span {
    color: var(--azul);
  }
`

export const Footer = () => {
  return (
    <FooterCustom>
      <FooterTop>
        <Conteudo>
          <TituloFooter>
            <img src="/img/logo.gif" alt="Logo" />
            <Subtitulo>Transformando visitantes em clientes.</Subtitulo>
          </TituloFooter>
          <ListagemLinks>
            <ListaLinks>
              <TituloLinks>Links Principais</TituloLinks>
              <LinkCustom href="">Home</LinkCustom>
              <LinkCustom href="">Ferramenta</LinkCustom>
              <LinkCustom href="">Preços</LinkCustom>
              <LinkCustom href="">Contato</LinkCustom>
            </ListaLinks>
            <ListaLinks>
              <TituloLinks>Cases</TituloLinks>
              <LinkCustom href="">Geração de leads B2B</LinkCustom>
              <LinkCustom href="">Geração de leads em Software</LinkCustom>
              <LinkCustom href="">Geração de leads em Imobiliaria</LinkCustom>
              <LinkCustom href="">Cases de Sucesso</LinkCustom>
            </ListaLinks>
            <ListaLinks>
              <TituloLinks>Materiais</TituloLinks>
              <LinkCustom href="">Blog</LinkCustom>
              <LinkCustom href="">Parceria com Agências</LinkCustom>
              <LinkCustom href="">Guia Definitivo do Marketing</LinkCustom>
              <LinkCustom href="">Materiais Gratuitos</LinkCustom>
            </ListaLinks>
            <ListaLinks>
              <TituloLinks>Siga a Leadster</TituloLinks>
              <IconesRedes>
                <BsFacebook color="var(--cinza)" size={30} />
                <BsLinkedin color="var(--cinza)" size={30} />
                <BsInstagram color="var(--cinza)" size={30} />
              </IconesRedes>
              <ParagrafoContatos>
                <p>E-mail: <LinkCustom href="">contato@leadster.com.br</LinkCustom></p>
                <p>Telefone: <LinkCustom href="">(42) 98828-9851</LinkCustom></p>
              </ParagrafoContatos>
            </ListaLinks>
          </ListagemLinks>
        </Conteudo>
      </FooterTop>
      <FooterBot>
        <ParagrafoTemos>Copyright © 2015 - 2022 Todos os direitos reservados | <span>Leadster</span></ParagrafoTemos>
        <ParagrafoTemos>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</ParagrafoTemos>
      </FooterBot>
    </FooterCustom>
  )
}
