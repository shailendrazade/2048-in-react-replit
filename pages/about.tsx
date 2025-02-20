
import Head from "next/head";
import styles from "@/styles/pages.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>About Us - 2048 Game</title>
      </Head>
      <h1>About Us</h1>
      <div className={styles.content}>
        <p>Welcome to 2048, a captivating puzzle game that challenges your strategic thinking!</p>
        <p>Our mission is to provide an engaging and entertaining gaming experience that exercises your mind while having fun.</p>
        <p>The game combines simple rules with complex strategy, making it perfect for players of all skill levels.</p>
      </div>
    </div>
  );
}
