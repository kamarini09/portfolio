import styles from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div id='contact' className={styles.container}>
          <Link href="https://github.com/kamarini09" target="_blank">
            <button className={styles.button}>GitHub</button>
          </Link>
          <Link href="https://www.instagram.com/kamarini._/" target="_blank">
            <button className={styles.button}>Instagram</button>
          </Link>
          <Link href="https://www.linkedin.com/in/kamarini-moragianni/" target="_blank">
            <button className={styles.button}>LinkedIn</button>
          </Link>
          <Link href="/CV.pdf" target="_blank">
             <button className={styles.button} download>CV</button>
          </Link>
        </div>
      );
}

  