import { 
  GetServerSideProps, 
  GetServerSidePropsContext, 
  GetServerSidePropsResult, 
} from 'next';
import { parseCookies, destroyCookie } from 'nookies';

import { AuthTokenError } from '../services/errors/AuthTokenError';

export function canSSRAuth<T>(fn: GetServerSideProps<T>) {
  return async (context: GetServerSidePropsContext)
  : Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(context);

    const token = cookies['@nextauth.token'];

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    try {
      return await fn(context);
    } catch(err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(context, '@nextauth.token');

        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }
    }
  }
}
