
import MenuBar from './menubar';
import Footer from './footer';
import styles from '@/styles/layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>2048</h1>
        <MenuBar />
      </header>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
