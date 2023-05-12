import styles from './Projects.module.css';
import Link from 'next/link';

export default function Projects() {
  const projectsData = [
    { id:1, h1: "Photography Portfolio", href: "https://github.com/kamarini09/photography_portfolio",description:"This is a personal project I created in addition to my projects at KEA.I have a passion for photography, so I thought it would be a fantastic idea in order to improving my Next.js skills, to build a photography portfolio using this framework so that I could present my work online and also gain knowledge  in Next.js." },
    { id:2, h1: "Charlie Tango Case", href: "https://github.com/henrynavntoft/charlie-tango-case",description:"Our group worked on a school project in collaboration with Charlie Tango for the real estate firm EDC, using Next.js. Our objective was to build a multi-page form for potential sellers, store the input data in a database, and then display the information in a dashboard." },
    { id:3, h1: "Hacking Hogwards", href: "https://github.com/kamarini09/hackinghogwarts",description:"This is a final assignment of the Just JavaScript theme at KEA.The purpose was to code in Vanilla JavaScript so we learn the basics,starting from the fundamental concepts and building up to more complex topics. It covers topics such as variables, data types, operators, functions, loops, and objects." },
   
  ];

    return (
      <div id='projects' className={styles.container}>
        
      {projectsData.map((item) => (
        <div key={item.id} className={styles.card}>
              <h1 className={styles.h1}>{item.h1}</h1>
              <p className={styles.p}>{item.description}</p>
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
  
    