import { styled } from "styled-components";
import React, { ReactNode } from 'react';

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
  padding: 20px;
  border-radius: 4px;
`;

interface Props {
  onClose: () => void;
}

export const Modal = ({onClose} : Props) => {
  return (
    <ContainerModal>
      <ModalCard>
        <button onClick={onClose}>Fechar</button>
      </ModalCard>
    </ContainerModal>
  )
}

