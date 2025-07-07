// src/pages/ProjectDetailPage/ProjectChangelog.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom'; // (1) استيراد useOutletContext
import styles from './ProjectDetailPage.module.css';
import { FaTag } from 'react-icons/fa';

const ProjectChangelog = () => {
  const { project } = useOutletContext(); // (2) استخدام useOutletContext مباشرة

  // ... باقي الكود يبقى كما هو
  return (
    <div className={styles.textContent}>
      <h2>سجل التحديثات</h2>
      <div className={styles.changelogContainer}>
        {project.changelog.map((entry, index) => (
          <div key={index} className={styles.changelogEntry}>
            <div className={styles.timelineIcon}>
              <FaTag />
            </div>
            <div className={styles.changelogContent}>
              <span className={styles.changelogDate}>{entry.date}</span>
              <h3 className={styles.changelogVersion}>الإصدار {entry.version}</h3>
              <ul className={styles.changelogChanges}>
                {entry.changes.map((change, i) => (
                  <li key={i}>{change}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectChangelog;