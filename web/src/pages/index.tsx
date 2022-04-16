import { FormEvent, useContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { AuthContext } from '../contexts/AuthContext';

import styles from '../../styles/home.module.scss';

import logo from '../../public/logo.svg';

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    
    const data = {
      email,
      password,
    };

    signIn(data);

    setEmail('');
    setPassword('');
  }

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              placeholder="Sua Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              loading={false}
              onClick={handleLogin}
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
