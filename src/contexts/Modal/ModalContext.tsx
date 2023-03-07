import { ModalContextProps } from '@/src/interfaces/modal';
import { createContext } from 'react';

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);
