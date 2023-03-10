import React from 'react';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.loginCard}>
          <h2>Next auth app</h2>
          <h5>Login with</h5>
          <button
            className={styles.actionButton}
            onClick={() => {
              signIn('azure-ad', { callbackUrl: '/dashboard' }, { prompt: 'login' });
            }}
          >
            Sign in with O365
          </button>
        </div>
      </main>
    </>
  );
}
