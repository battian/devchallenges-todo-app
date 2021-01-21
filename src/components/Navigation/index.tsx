import { useState } from 'react';
import styles from './Navigation.module.css';

interface NavigationProps {
  status: string;
  setStatus: (status: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ status, setStatus }) => {
  return (
    <nav className={styles.nav}>
      <button
        className={`${styles.nav__status} ${
          status === 'all' ? styles.nav__statusActive : ''
        }`}
        onClick={() => setStatus('all')}
      >
        All
      </button>

      <button
        className={`${styles.nav__status} ${
          status === 'active' ? styles.nav__statusActive : ''
        }`}
        onClick={() => setStatus('active')}
      >
        Active
      </button>

      <button
        className={`${styles.nav__status} ${
          status === 'completed' ? styles.nav__statusActive : ''
        }`}
        onClick={() => setStatus('completed')}
      >
        Completed
      </button>
    </nav>
  );
};

export default Navigation;
