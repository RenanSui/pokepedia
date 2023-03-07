import { FC, useState } from 'react';
import { ModalContext } from './ModalContext';

interface ModalProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState('');

  return (
    <>
      <ModalContext.Provider
        value={{ isModalOpen, modalInfo, setIsModalOpen, setModalInfo }}
      >
        {children}
      </ModalContext.Provider>
    </>
  );
};

export default ModalProvider;
