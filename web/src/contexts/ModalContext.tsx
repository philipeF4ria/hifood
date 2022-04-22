import { createContext, useState, ReactNode } from 'react';

type ModalProviderProps = {
  children: ReactNode;
}

type ModalContextData = {
  isVisible: Boolean;
  handleToggleModal: () => void;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  function handleToggleModal() {
    setIsVisible(prevState => !prevState);
  }

  return (
    <ModalContext.Provider value={{ isVisible, handleToggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}
