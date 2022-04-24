import Image from 'next/image';

import { StatusBadge } from '../../components/StatusBadge';

import cappuccino from '../../../public/cappuccino.jpg';

import styles from './styles.module.scss';

export function OrderCard() {
  return (
    <div className={styles.container}>
      <h1>Pedido #1 - Mesa 04</h1>
      <time>23 de abril, 19:00</time>
      <div className={styles.itemContainer}>
        <Image 
          src={cappuccino} 
          width={80} 
          height={80}
          quality={100}
        />
        <div className={styles.itemData}>
          <strong>Cappuccino</strong>
          <small>Cappuccino com acréscimo de canela</small>
          <div className={styles.cardFooter}>
            <strong>R$5,65</strong>
            <strong>Qtd: 1</strong>
          </div>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <Image 
          src={cappuccino} 
          width={80} 
          height={80}
          quality={100}
        />
        <div className={styles.itemData}>
          <strong>Cappuccino</strong>
          <small>Cappuccino com acréscimo de canela</small>
          <div className={styles.cardFooter}>
            <strong>R$5,65</strong>
            <strong>Qtd: 1</strong>
          </div>
        </div>
      </div>

      <span className={styles.moreItens}>
        <small>Ver mais 2 itens</small>
      </span>
      <StatusBadge />
    </div>
  );
}
