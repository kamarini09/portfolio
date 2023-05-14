import styles from './Skills.module.css';

export default function Skills() {
  const skillsData = [
    { id:1, skill: "HTML" },
    { id:2, skill: "React" },
    { id:3, skill: "CSS" },
    { id:4, skill: "GitHub" },
    { id:5, skill: "Next.js" },
    { id:6, skill: "JavaScript" },
    { id:7, skill: "Problem-solving and critical thinking skills" },
    { id:8, skill: "Communication and collaboration skills" },
    { id:9, skill: "Understanding of databases and data storage" },

  ];

  return (
    <div id='skills' className={styles.container}>
      <h2 className={styles.h2}>Skills</h2>
      <ul className={styles.skillsList}>
        {skillsData.map((item) => (
          <li key={item.id} className={styles.skill}>{item.skill}</li>
        ))}
      </ul>
    </div>
  );
}
