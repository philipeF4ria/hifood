import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import styles from '../../styles/home.module.scss';

import logo from '../../public/logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>HiFood - Faça seu login</title>
      </Head>
      <div className={styles.container}>
        <Image src={logo} alt="HiFood"/>
        <div className={styles.loginForm}>
          <form>
            <Input 
              placeholder="Seu E-mail"
              type="email"
            />
            <Input 
              placeholder="Sua Senha"
              type="password"
            />
            <Button 
              loading={false}
            >
              Fazer Login
            </Button>
          </form>
          <Link href="/signup">
            <a className={styles.text}>Criar uma conta</a>
          </Link>
        </div>
      </div>
    </>
  );
}
