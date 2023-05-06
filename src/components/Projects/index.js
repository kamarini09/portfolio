import styles from './Projects.module.css';
import Link from 'next/link';

export default function Projects() {
  const projectsData = [
    { id:1, h1: "Photography Portfolio", href: "https://github.com/kamarini09/photography_portfolio",description:"" },
    { id:2, h1: "Charlie Tango Case", href: "https://github.com/henrynavntoft/charlie-tango-case",description:"" },
    { id:3, h1: "Hacking Hogwards", href: "https://github.com/kamarini09/hackinghogwarts",description:"" },
   
  ];

    return (
      <div id='projects' className={styles.container}>
        
      {projectsData.map((item) => (
        <div key={item.id} className={styles.card}>
              <h1 className={styles.h1}>{item.h1}</h1>
              <p className={styles.p}>{item.description}.</p>
              <Link  href={item.href} passHref target="_blank" rel="noopener noreferrer">
               <div className={styles.button} >
               GitHub
              </div>
             </Link>
       </div>
          ))}
          
      </div>
    );
  }
  
    