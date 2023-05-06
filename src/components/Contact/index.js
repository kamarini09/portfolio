import styles from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div id='contact' className={styles.container}>
          <Link href="https://github.com/kamarini09">
            <button className={styles.button}>GitHub</button>
          </Link>
          <Link href="https://www.instagram.com/kamarini._/">
            <button className={styles.button}>Instagram</button>
          </Link>
          <Link href="https://www.linkedin.com/in/kamarini-moragianni/">
            <button className={styles.button}>LinkedIn</button>
          </Link>
        </div>
      );
}

  