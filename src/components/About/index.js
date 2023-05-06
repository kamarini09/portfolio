import styles from './About.module.css';

export default function About() {
    return (
      <div id='about' className={styles.container}>
        <img src="/me.jpeg" alt="" />
   
       
        <div >
          <h1 className={styles.h1}>Welcome to my portfolio!</h1>
          <p className={styles.text}> Hi there!
           My name is Kamarini, and I'm a Greek 
          student currently studying Multimedia Design at KEA in Copenhagen. During
           my studies, I've discovered a passion for coding, particularly in the
            frontend development field. I have been focusing on learning JavaScript 
            fundamentals this semester, and I'm excited to begin using frameworks 
            such as React and Next.js. I'm currently searching for an internship where
             I can gain hands-on experience and continue learning from experienced 
             professionals. If you're interested, please take a look at my portfolio
              to see some of the projects I've worked on in the past. Thank you!
          </p>
        </div>
      </div>
    );
  }
  