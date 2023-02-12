import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import styles from '@/styles/Home.module.css';

const Dashboard = () => {
  const { data } = useSession();
  console.log('data', data);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dashboard</h1>
      {data && (
        <>
          <div>{`Name : ${data.user?.name}`}</div>
          <div>{`Email : ${data.user?.email}`}</div>
          <div>{`Token: ${data.accessToken}`}</div>
        </>
      )}
      <button className={styles.actionButton} onClick={() => signOut({ callbackUrl: '/' })}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
