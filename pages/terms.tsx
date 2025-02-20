import Head from "next/head";
import styles from "@/styles/pages.module.css";
import Layout from '@/components/layout'; // Added import for Layout component

export default function Terms() {
  return (
    <Layout> {/* Wrapped Terms component with Layout */}
      <Head>
        <title>Terms of Use - 2048 Game</title>
      </Head>
      <h1>Terms of Use</h1>
      <div className={styles.content}>
        <p>By accessing and playing 2048, you agree to these Terms of Use.</p>
        <h2>Game Rules</h2>
        <p>Players must follow the standard rules of 2048. Any attempt to cheat or exploit the game is prohibited.</p>
        <h2>Fair Use</h2>
        <p>This game is provided for personal entertainment. Commercial use or redistribution is not permitted without explicit permission.</p>
      </div>
    </Layout> {/* Closed Layout component */}
  );
}

//Added minimal layout component
//This needs to be in a file named layout.js inside the components folder.
//This is a placeholder, adjust styling and content as needed.

//components/layout.js
import styles from "@/styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>2048 Game</h1> {/* Example header - customize as needed */}
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Your Name</p> {/* Example footer - customize as needed */}
      </footer>
    </div>
  );
}