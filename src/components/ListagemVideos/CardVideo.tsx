import { styled } from "styled-components"

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardContent = styled.p`
  font-size: 14px;
`;

export const CardVideo = ({ title, content }: any) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  )
}
