import { FormEvent, useState, useContext } from 'react';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { canSSRAuth } from '../../utils/canSSRAuth';

import { ModalContext } from '../../contexts/ModalContext';
 
import { api } from '../../services/apiClient';

export default function Dashboard() {
  const { isVisible } = useContext(ModalContext);

  const [category, setCategory] = useState('');
  
  async function handleAddCategory(event: FormEvent) {
    event.preventDefault();

    if (!category) {
      return;
    }

    const data = {
      name: category
    }

    await api.post('/categories', data);

    setCategory('');
  }

  return (
    <>
      <Head>
        <title>HiFood - Painel</title>
      </Head>
      <div>
        <Header />
        <Modal title="Nova Categoria" isVisible={isVisible}>
          <form onSubmit={handleAddCategory}>
            <Input
              placeholder="Nome da categoria"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
            <Button>
              Cadastrar Categoria
            </Button>
          </form>
        </Modal>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {}
  }
});
