import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import styles from '../../../styles/home.module.scss';

import logo from '../../../public/logo.svg';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>HiFood - Cadastre-se</title>
      </Head>
      <div className={styles.container}>
        <Image src={logo} alt="HiFood"/>
        <div className={styles.loginForm}>
          <form>
            <Input 
              placeholder="Seu Nome"
              type="text"
            />

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
              Cadastrar
            </Button>
          </form>
          <Link href="/">
            <a className={styles.text}>Já possui conta? Faça Login</a>
          </Link>
        </div>
      </div>
    </>
  );
}
