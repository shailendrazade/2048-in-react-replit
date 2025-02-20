import Head from "next/head";
import styles from "@/styles/pages.module.css";
import Layout from '@/components/layout';

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - 2048 Game</title>
      </Head>
      <h1>Privacy Policy</h1>
      <div className={styles.content}>
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you play 2048.</p>
        <h2>Data Collection</h2>
        <p>We only store game progress and settings locally in your browser. No personal data is collected or stored on our servers.</p>
        <h2>Cookies</h2>
        <p>We use cookies solely for game functionality and to remember your highest score.</p>
      </div>
    </Layout>
  );
}