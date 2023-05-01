import styles from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className={styles.container}>
          <Link href="https://github.com/your-username">
            <button className={styles.button}>GitHub</button>
          </Link>
          <Link href="https://www.instagram.com/your-username/">
            <button className={styles.button}>Instagram</button>
          </Link>
          <Link href="/path/to/cv.pdf">
            <button className={styles.button}>CV</button>
          </Link>
          <Link href="https://www.linkedin.com/in/your-username/">
            <button className={styles.button}>LinkedIn</button>
          </Link>
        </div>
      );
}

  