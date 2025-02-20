import Head from "next/head";
import Image from "next/image";
import Board from "@/components/board";
import Score from "@/components/score";
import MenuBar from "@/components/menubar";
import Footer from "@/components/footer";
import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Play 2048</title>
        <meta
          name="description"
          content="Fully-functional 2048 game built in NextJS and TypeScript. Including animations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon16.png" />
      </Head>
      <header className={styles.header}>
        <h1>2048</h1>
        <Score />
        <MenuBar />
      </header>
      <main>
        <Board />
      </main>
      <div>
        <h2>🚀 Create your own game</h2>
        <p>
          Join my{" "}
          <a
            href="https://assets.mateu.sh/r/github-2048-in-react-readme"
            target="_blank"
            rel="noopener"
          >
            Udemy course
          </a>{" "}
          and learn how to create the 2048 game from scratch.
        </p>
      </div>
      <Footer />
    </div>
  );
}
