import { styled } from "styled-components";
import { IoMdClose } from "react-icons/io"
import { BotaoDownload } from "./BotaoDownload";

const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c83fb60;
`;

const ModalCard = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 600px;
  height: 700px;
`;

const ContainerExit = styled.div`
  text-align: end;
  border-top: solid 6px var(--azul);
  border-radius: 6px;
  padding: 10px;
`

const TituloModal = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0px 40px 32px 40px;
  padding: 0px 80px 0px 80px;
  text-align: center;

  & span {
    color: var(--azul);
  }
`

const Video = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
`

const ContainerDescricao = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`

const ParagrafoVideo = styled.p`
  padding-bottom: 8px;
  margin: 0px 24px 8px 24px;
  border-bottom: solid 1px #e7e5e5;
  color: var(--preto);
  font-weight: 800;
`

const Descricao = styled.p`
  color: var(--preto);
  font-weight: 500;
  margin: 0px 24px 20px 24px;
`

const BotoesDownload = styled.div`
  display: flex;
  justify-content: start;
  margin: 4px 24px 0px 24px;
`

interface Props {
  onClose: () => void;
}

export const Modal = ({ onClose }: Props) => {
  return (
    <ContainerModal>
      <ModalCard>
        <ContainerExit>
          <IoMdClose onClick={onClose} size={25} color="var(--cinza)">Fechar</IoMdClose>
        </ContainerExit>
        <TituloModal><span>Webinar:</span> Como aumentar sua Gerção de Leads feat. Traktor</TituloModal>
        <Video 
          src="https://www.youtube.com/embed/kvZxxVLApxw"
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <ContainerDescricao>
          <ParagrafoVideo>Descrição</ParagrafoVideo>
          <Descricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam ac purus ornare, pretium sem at, hendrerit neque.
            Nam rutrum mi vel tellus bibendum suscipit.
          </Descricao>
          <ParagrafoVideo>Downloads</ParagrafoVideo>
          <BotoesDownload>
            <BotaoDownload titulo="Spreadsheet.xls" corFonte="rgb(0, 179, 135)" corFundo="rgb(146, 245, 220)" corIcone="rgb(0, 179, 135)"/>
            <BotaoDownload titulo="Document.doc" corFonte="var(--azul)" corFundo="#afd8f0" corIcone="var(--azul)"/>
            <BotaoDownload titulo="Presentation.ppt" corFonte="rgb(169, 148, 69)" corFundo="rgb(245, 230, 175)" corIcone="rgb(169, 148, 69)"/>
          </BotoesDownload>
        </ContainerDescricao>
      </ModalCard>
    </ContainerModal>
  )
}
