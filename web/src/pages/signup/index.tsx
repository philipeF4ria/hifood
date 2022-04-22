import { FormEvent, useState, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { AuthContext } from '../../contexts/AuthContext';

import styles from '../../../styles/home.module.scss';

import logo from '../../../public/logo.svg';

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (!name || !email || !password) {
      toast.error('Insira os dados corretamente');
      return;
    }

    setLoading(true);
    
    const data = {
      name,
      email,
      password,
    };

    await signUp(data);

    setName('');
    setEmail('');
    setPassword('');

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>HiFood - Cadastre-se</title>
      </Head>
      <div className={styles.container}>
        <Image src={logo} alt="HiFood"/>
        <div className={styles.loginForm}>
          <form onSubmit={handleSignUp}>
            <Input 
              placeholder="Seu Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
