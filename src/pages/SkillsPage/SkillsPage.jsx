// src/pages/SkillsPage/SkillsPage.jsx (النسخة النهائية والمصححة تماماً)
import React from 'react';
import styles from './SkillsPage.module.css';

// استيراد جميع الأيقونات المطلوبة
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython, 
  FaSass, FaBootstrap, FaVuejs, FaAndroid, FaApple, FaDatabase
} from 'react-icons/fa';

import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

import { 
  SiJavascript, SiVite, SiFlutter, SiDart, SiNextdotjs, SiJquery, 
  SiDotnet, 
  SiMysql, SiSqlite, 
  SiMongodb, SiFirebase, SiRedis, SiElectron, SiWebpack, 
  SiTailwindcss, SiFigma, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator,
  SiPython // <<< التغيير هنا: إضافة SiPython المفقودة
} from 'react-icons/si';

// 1. مهارات الواجهات الأمامية (Frontend)
const frontendSkills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Vue.js', icon: <FaVuejs /> },
  { name: 'jQuery', icon: <SiJquery /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Sass', icon: <FaSass /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
];

// 2. مهارات الواجهات الخلفية (Backend)
const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'ASP.NET Core', icon: <SiDotnet /> },
  { name: 'C#', icon: <TbBrandCSharp /> }, 
  { name: 'Python', icon: <SiPython /> }, // <-- الآن هذا السطر سيعمل بشكل صحيح
  { name: 'Java', icon: <FaJava /> },
];

// ... (باقي الكود يبقى كما هو)

// 3. مهارات تطبيقات الموبايل (Mobile)
const mobileSkills = [
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'React Native', icon: <FaReact /> },
  { name: 'Android (Java)', icon: <FaAndroid /> },
  { name: 'iOS', icon: <FaApple /> },
];

// 4. قواعد البيانات (Databases)
const databaseSkills = [
  { name: 'SQL Server', icon: <DiMsqlServer /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'SQLite', icon: <SiSqlite /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Redis', icon: <FaDatabase /> },
];

// 5. أدوات التصميم (UI/UX Design)
const designSkills = [
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Adobe XD', icon: <SiAdobexd /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator /> },
];

// 6. أدوات أخرى (Tools & Others)
const otherSkills = [
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Webpack', icon: <SiWebpack /> },
  { name: 'Electron.js', icon: <SiElectron /> },
];

// دالة مساعدة لإنشاء قسم المهارات
const SkillsSection = ({ title, skills }) => (
  <section className={styles.skillsSection}>
    <h2 className={styles.categoryTitle}>{title}</h2>
    <div className={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillCard}>
          <div className={styles.skillIcon}>{skill.icon}</div>
          <p className={styles.skillName}>{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);

const SkillsPage = () => {
  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.title}>المهارات التقنية</h1>
      <p className={styles.subtitle}>
        مجموعة شاملة من التقنيات والأدوات التي أستخدمها لبناء مشاريع قوية ومتكاملة.
      </p>
      
      <SkillsSection title="تطوير الواجهات الأمامية (Frontend)" skills={frontendSkills} />
      <SkillsSection title="تطوير الواجهات الخلفية (Backend)" skills={backendSkills} />
      <SkillsSection title="تطبيقات الموبايل (Mobile)" skills={mobileSkills} />
      <SkillsSection title="قواعد البيانات (Databases)" skills={databaseSkills} />
      <SkillsSection title="أدوات التصميم (UI/UX Design)" skills={designSkills} />
      <SkillsSection title="أدوات أخرى" skills={otherSkills} />
    </div>
  );
};

export default SkillsPage;