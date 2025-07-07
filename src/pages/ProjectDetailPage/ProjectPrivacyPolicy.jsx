// src/pages/ProjectDetailPage/ProjectPrivacyPolicy.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom'; // (1) استيراد useOutletContext
import styles from './ProjectDetailPage.module.css';

const ProjectPrivacyPolicy = () => {
  const { project } = useOutletContext(); // (2) استخدام useOutletContext مباشرة

  return (
    <div className={styles.textContent}>
      <h2>سياسة الخصوصية</h2>
      <div dangerouslySetInnerHTML={{ __html: project.privacyPolicy }} />
    </div>
  );
};

export default ProjectPrivacyPolicy;