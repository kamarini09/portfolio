import styles from './Projects.module.css';

export default function Projects() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Project 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ligula tortor. Proin nec enim purus. Mauris aliquet sapien quis urna faucibus, vel gravida est pretium.</p>
          <a href="https://github.com/your-username/project-1" target="_blank" rel="noopener noreferrer" className={styles.button}>GitHub Repo</a>
        </div>
        <div className={styles.card}>
          <h1>Project 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ligula tortor. Proin nec enim purus. Mauris aliquet sapien quis urna faucibus, vel gravida est pretium.</p>
          <a href="https://github.com/your-username/project-2" target="_blank" rel="noopener noreferrer" className={styles.button}>GitHub Repo</a>
        </div>
        <div className={styles.card}>
          <h1>Project 3</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ligula tortor. Proin nec enim purus. Mauris aliquet sapien quis urna faucibus, vel gravida est pretium.</p>
          <a href="https://github.com/your-username/project-3" target="_blank" rel="noopener noreferrer" className={styles.button}>GitHub Repo</a>
        </div>
      </div>
    );
  }
  