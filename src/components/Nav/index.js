import Link from 'next/link';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <div className={styles.link}>Home</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/projects">
            <div className={styles.link}>Projects</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/contact">
            <div className={styles.link}>Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
