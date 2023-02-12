import React from 'react';
import '@/styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();

  const { status, data } = useSession();

  if (status === 'loading' && data === undefined) {
    return <div>Loading....</div>;
  }

  if (status === 'authenticated' && router.pathname === '/') {
    router.push('/dashboard');
  }

  return children;
}
