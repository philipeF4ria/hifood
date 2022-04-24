import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '../../styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '../contexts/AuthContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000}/>
    </AuthProvider>
  );
}

export default App
