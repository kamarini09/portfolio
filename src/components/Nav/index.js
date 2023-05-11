import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
    <ul>
      <li>
      <Link href="#about">
          About
        </Link>
      </li>
      <li>
      <Link href="#projects">
          Projects
        </Link>
      </li>
      <li>
        <Link href="#contact" >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  );
}


