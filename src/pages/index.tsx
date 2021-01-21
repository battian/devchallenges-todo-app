import Head from 'next/head';
import Todo from '../components/Todo';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>#todo</header>

      <main className={styles.main}>
        <Todo />
      </main>

      <footer className={styles.footer}>battian @ DevChallenges.io</footer>
    </div>
  );
}
