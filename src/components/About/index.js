import styles from './About.module.css';
export default function About() {
    return (
      <div className={styles.container}>
        <img src="/profile-picture.jpg" alt="Profile picture" className={styles.picture} />
        <div className={styles.text}>
          <h2>Welcome to my portfolio!</h2>
          <p> Hey there! I'm Kama, a multimedia design student from Greece currently
             living in Copenhagen.I'm super passionate about designing and building
             websites. I'm studying Multimedia Design  at KEA, currently in the Fronted 
             Elective. I have already completed a bunch of projects that show off 
             my skills in HTML, CSS, and JavaScript.In my recent projects, I've used React and Next.js 
             to create my projects.I'm looking for an internship where I can gain some real-world experience 
             and learn even more. Feel free to check out my portfolio to see some of my previous projects.
              Thanks you!
          </p>
        </div>
      </div>
    );
  }
  