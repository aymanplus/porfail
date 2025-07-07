// src/pages/SkillsPage/SkillsPage.jsx
import React from 'react';
import styles from './SkillsPage.module.css';

// استيراد الأيقونات التي تحتاجها من المكتبة
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
// **جديد:** استيراد أيقونات Flutter و Dart و JavaScript و Vite
import { SiJavascript, SiVite, SiFlutter, SiDart } from 'react-icons/si'; 

// تعريف بيانات المهارات في مصفوفة لتسهيل إدارتها
const skillsData = [
  { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Git', icon: <FaGitAlt /> },
  // { name: 'Vite', icon: <SiVite /> },
  
  // **جديد:** إضافة Flutter و Dart هنا
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Dart', icon: <SiDart /> },
  
  // يمكنك إضافة أي مهارات أخرى هنا بنفس الطريقة
  // مثال:
  // { name: 'Firebase', icon: <SiFirebase /> },
  // { name: 'TypeScript', icon: <SiTypescript /> },
];

const SkillsPage = () => {
  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.title}>مهاراتي التقنية</h1>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;