import { createContext, ReactNode, useState, useEffect } from 'react';
import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { toast } from 'react-toastify';

import { api } from '../services/apiClient';

type UserProps = {
  id: string;
  name: string;
  email: string;
}

type SignInProps = {
  email: string;
  password: string;
}

type SignUpProps = {
  name: string;
  email: string;
  password: string;
}

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
 }

 type AuthProviderProps = {
   children: ReactNode;
 }

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth.token');

    Router.push('/');
  } catch {
    console.log('Erro ao deslogar');
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const isAuthenticated = !!user;

  useEffect(() => {

    const { '@nextauth.token': token } = parseCookies();

    if (token) {
      api.get('/me').then(response => {
        const { id, name, email } = response.data;
        
        setUser({
          id,
          name,
          email,
        });
      })
      .catch(() => {
        signOut();
      });
    }
  
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/session', {
        email,
        password,
      });

      const {
        id,
        name,
        token,
      } = response.data;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });

      setUser({
        id,
        name,
        email,
      });

      api.defaults.headers['Authorization'] = `Bearer ${token};`

      toast.success('Login feito com sucesso!');

      Router.push('/dashboard');

    } catch {
      toast.error('Erro ao entrar!');
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      await api.post('/users', {
        name,
        email,
        password,
      });

      toast.success('Cadastro feito com sucesso!');

      Router.push('/');

    } catch(err) {
      toast.error('Erro ao cadastrar!');
    }
  }
  
  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        signIn, 
        signUp, 
        signOut
      }}>
      { children }
    </AuthContext.Provider>
  );
}
