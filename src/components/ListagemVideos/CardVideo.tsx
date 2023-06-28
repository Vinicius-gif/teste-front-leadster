import { styled } from "styled-components"

const CardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px;
  height: 300px;
  margin: 5px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  padding: 20px;
  color: var(--preto);
`;

const Thumbnail = styled.img`
  border-radius: 12px;
  border-bottom: none;
  width: 100%;
`;

export const CardVideo = ({ title }: any) => {
  return (
    <CardContainer>
      <Thumbnail src="/img/thumbnail.png" alt="Capa do vídeo"/>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  )
}
