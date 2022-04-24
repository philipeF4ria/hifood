import { ReactNode, useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

type ModalProps = {
  title: String;
  isVisible: Boolean;
  handleToggleModal: () => void;
  children: ReactNode;
}

export function Modal({ title, isVisible, handleToggleModal, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isVisible) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>
          <h1>{title}</h1>
          <FiX size={24} onClick={handleToggleModal}/>
        </header>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
