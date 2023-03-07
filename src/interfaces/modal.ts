import { Dispatch, SetStateAction } from 'react';

export type ModalContextProps = {
  isModalOpen: boolean;
  modalInfo: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalInfo: Dispatch<SetStateAction<string>>;
};
