import { FormEvent, useState, useContext } from 'react';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { OrderCard } from '../../components/OrderCard';

import styles from './styles.module.scss';

import { canSSRAuth } from '../../utils/canSSRAuth';
 
import { api } from '../../services/apiClient';

export default function Dashboard() {

  return (
    <>
      <Head>
        <title>HiFood - Pedidos</title>
      </Head>
      <div>
        <Header />
        <main className={styles.ordersContainer}>
          <OrderCard />
          <OrderCard />
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {}
  }
});
