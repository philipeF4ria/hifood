import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

type ModalProps = {
  title: string;
  children: ReactNode;
}

export function Modal({ title, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
