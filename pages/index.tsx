import Head from 'next/head';
import styles from '../styles/Home.module.css';

import CookieNextLink from '../components/Cookie/Cookie-Next-Link.tsx';
import CookieAHref from '../components/Cookie/Cookie-A-Href.tsx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Попутчик Буй</title>
        </Head>
        <Navbar />
        <main className={styles.main}>

          <CookieNextLink />
          <br />
          <CookieAHref />
          <br />

          <h1 className={styles.title}>
            Этот сайт решает проблему банов водителей на блаблакар
          </h1>
          <h1 className={styles.title}>
            и помогает сохранить деньги пассажиру
          </h1>
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Водитель &rarr;</h3>
              <p>Добавь в профиль описание блбала попутчик буй.</p>
            </div>

        

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Пассажир &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
            <div className={styles.card}>
              <h3>Водитель &rarr;</h3>
              <p>Расскажи пассажиру, где висит твой номер !</p>
            </div>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Пассажир &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
