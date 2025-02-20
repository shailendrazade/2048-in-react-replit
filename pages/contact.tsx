
import Head from "next/head";
import styles from "@/styles/pages.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Contact Us - 2048 Game</title>
      </Head>
      <h1>Contact Us</h1>
      <div className={styles.content}>
        <p>We'd love to hear from you! If you have any questions, suggestions, or feedback about the game, please don't hesitate to reach out.</p>
        <p>Email: support@2048game.com</p>
        <p>We aim to respond to all inquiries within 24-48 hours.</p>
      </div>
    </div>
  );
}
