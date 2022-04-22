import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiHome, FiCoffee, FiBarChart, FiLogOut } from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';

import styles from './styles.module.scss';

import logo from '../../../public/logo.svg';

export function Header() {
  const { signOut } = useContext(AuthContext);
  
  return (
    <header className={styles.container}>
      <Image src={logo} alt="HiFood"/>
      <nav>
        <Link href="/dashboard">
          <a>
            Home
            <FiHome size={20}/>
          </a>
        </Link>
        <Link href="/dashboard">
          <a>
            Produtos
            <FiCoffee size={20}/>
          </a>
        </Link>
        <Link href="/dashboard">
          <a>
            Estatísticas
            <FiBarChart size={20}/>
          </a>
        </Link>
        <button onClick={signOut}>
          <FiLogOut size={20}/>
        </button>
      </nav>
    </header>
  );
}
