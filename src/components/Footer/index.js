import Contact from '../Contact';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Lets keep in touch!</h2>
      <Contact></Contact>
      <p>Contact me at: <a href="mailto:moragiannikam@gmail.com">moragiannikam@gmail.com</a></p> 
    </footer>
  );
}
