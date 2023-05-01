import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright © {new Date().getFullYear()}
        <a href="https://your-website.com"> Kamarini Moragianni</a>
      </p>
    </footer>
  );
}
