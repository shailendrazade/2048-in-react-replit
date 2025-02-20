
import Link from 'next/link';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link href="/about">About Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
        <div className={styles.copyright}>© 2024 2048 Game. All rights reserved.</div>
      </div>
    </footer>
  );
}
