import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '../../styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '../contexts/AuthContext';
import { ModalProvider } from '../contexts/ModalContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ModalProvider>
        <Component {...pageProps} />
        <ToastContainer autoClose={3000}/>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App
