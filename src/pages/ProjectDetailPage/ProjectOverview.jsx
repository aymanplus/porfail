// src/pages/ProjectDetailPage/ProjectOverview.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom'; // (1) استيراد useOutletContext
import styles from './ProjectDetailPage.module.css';
import { FaGithub, FaGooglePlay } from 'react-icons/fa';

const ProjectOverview = () => {
  const { project } = useOutletContext(); // (2) استخدام useOutletContext مباشرة

  // ... باقي الكود يبقى كما هو
  return (
    <div className={styles.overviewContainer}>
      <h2>مميزات التطبيق</h2>
      <div className={styles.featuresGrid}>
        {project.features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.actionButtons}>
        {project.googlePlayUrl && (
          <a href={project.googlePlayUrl} target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.playStore}`}>
            <FaGooglePlay />
            <span>متوفر على Google Play</span>
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.github}`}>
            <FaGithub />
            <span>عرض الكود على GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;