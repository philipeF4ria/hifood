import { ReactNode, useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

import { ModalContext } from '../../contexts/ModalContext';

type ModalProps = {
  title: String;
  isVisible: Boolean; 
  children: ReactNode;
}

export function Modal({ title, isVisible, children }: ModalProps) {
  const { handleToggleModal } = useContext(ModalContext);
  
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
