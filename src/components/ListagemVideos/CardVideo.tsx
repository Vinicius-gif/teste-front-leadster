import { styled } from "styled-components"

const CardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px;
  height: 300px;
  margin: 5px;
  cursor: pointer;

  @media (max-width: 600px) {
    margin: 15px;
  }
`;

const ContainerThumb = styled.div`
  position: relative;
`;

const ImagemThumb = styled.div`
  position: relative;
  width: 100%; 
  height: 204px;
`;

const Thumbnail = styled.img`
  border-radius: 12px 12px 0px 0px;
  width: 100%; 
  height: 204px;
  position: relative;
`;

const Overflow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #2c83fb60;
  width: 100%;
  height: 204px;
  border-radius: 12px 12px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.8;
  visibility: hidden;

  ${ContainerThumb}:hover & {
    visibility: visible;
  }
`

const IconePlay = styled.svg`
  fill: #fff;
  width: 60px;
  height: 60px;
`

const CardTitle = styled.h2`
  font-size: 18px;
  padding: 20px;
  color: var(--preto);

  &:hover {
    color: var(--azul);
  }
`;

interface Props {
  title: string;
  onClick: () => void;
}

export const CardVideo = ({ title, onClick }: Props) => {
  return (
    <CardContainer onClick={onClick}>
      <ContainerThumb>

        <ImagemThumb>
          <Thumbnail src="/img/thumbnail.png" alt="Capa do vídeo" />
        </ImagemThumb>

        <Overflow>
          <IconePlay xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.861 163.861">
            <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
          </IconePlay>
        </Overflow>
      </ContainerThumb>

      <CardTitle>{title}</CardTitle>
    </CardContainer>
  )
}
