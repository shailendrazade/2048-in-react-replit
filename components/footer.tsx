
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/mateuszsokola/2048-in-react" target="_blank" rel="noopener">
            <Image src="social-github.svg" alt="2048-in-react on GitHub" width={32} height={32} />
          </a>
          <a href="https://twitter.com/msokola" target="_blank" rel="noopener">
            <Image src="social-twitter.svg" alt="Matéush on Twitter" width={32} height={32} />
          </a>
        </div>
        <div className={styles.copyright}>Made with ❤️ by Matéush</div>
      </div>
    </footer>
  );
}
