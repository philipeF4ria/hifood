import { useState, FormEvent } from 'react';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Input } from '../../components/Input';

import styles from './styles.module.scss';

import { canSSRAuth } from '../../utils/canSSRAuth';
import { api } from '../../services/apiClient';

export default function Products() {
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  function handleToggleCategoryModal() {
    setIsCategoryModalVisible(prevState => !prevState);
  }

  function handleToggleProductModal() {
    setIsProductModalVisible(prevState => !prevState);
  }

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
        <title>HiFood - Produtos</title>
      </Head>
      <Header />
      <div className={styles.header}>
        <h1>Produtos Cadastrados</h1>
        <div>
          <Button onClick={handleToggleProductModal}>Novo Produto</Button>
          <Button onClick={handleToggleCategoryModal}>Nova Categoria</Button>
        </div>
      </div>
      <Modal 
        title="Nova Categoria" 
        isVisible={isCategoryModalVisible}
        handleToggleModal={handleToggleCategoryModal}
      >
        <form className={styles.form} onSubmit={handleAddCategory}>
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
      <Modal 
        title="Novo Produto" 
        isVisible={isProductModalVisible}
        handleToggleModal={handleToggleProductModal}
      >
        <form className={styles.form} onSubmit={handleAddCategory}>
          <Input
            placeholder="Nome do Produto"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <textarea
            className={styles.textarea}
            placeholder="Descrição do Produto"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <Input
            placeholder="Preço do Produto"
            type="number"
            min="0"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <select className={styles.select}>
            <option>Categoria do Produto</option>
            <option>Pizza</option>
            <option>Café</option>
            <option>Confeitaria</option>
          </select>
          <Button>
            Cadastrar Produto
          </Button>
        </form>
      </Modal>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {}
  }
});
