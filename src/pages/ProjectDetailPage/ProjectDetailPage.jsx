import React, { useEffect } from 'react';
// (1) تم حذف 'useOutletContext' من هذا السطر لأنه غير مستخدم هنا
import { useParams, NavLink, Outlet, Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import styles from './ProjectDetailPage.module.css';
import { FaArrowLeft } from 'react-icons/fa';

/**
 * ProjectDetailPage - The main layout component for a single project's page.
 * It fetches the project data based on the URL parameter and provides a layout
 * with a header, navigation tabs, and a content area for nested routes.
 */
const ProjectDetailPage = () => {
  // Get the projectId from the URL (e.g., "sales-memo")
  const { projectId } = useParams();
  
  // Find the corresponding project data from our centralized data file
  const project = projectsData[projectId];

  // Effect to scroll to the top of the page when the project or its section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // If the project is not found, display a "not found" message
  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>المشروع غير موجود</h2>
        <p>عفواً، المشروع الذي تبحث عنه غير متوفر.</p>
        <Link to="/projects" className={styles.backLink}>
          <FaArrowLeft /> العودة إلى قائمة المشاريع
        </Link>
      </div>
    );
  }

  // Render the project detail page layout
  return (
    <div className={styles.projectDetailContainer}>
      {/* The main header with a background image and title */}
      <header className={styles.projectHeader}>
        <img src={project.imageUrl} alt={project.title} className={styles.headerImage} />
        <div className={styles.headerOverlay}></div>
        <div className={styles.headerContent}>
          <Link to="/projects" className={styles.backLink}>
            <FaArrowLeft /> قائمة المشاريع
          </Link>
          <h1 className={styles.projectTitle}>{project.title}</h1>
        </div>
      </header>
      
      {/* Navigation tabs for the different sections of the project */}
      <nav className={styles.projectNav}>
        <NavLink 
          to={`/projects/${projectId}`} 
          className={({ isActive }) => (isActive ? `${styles.projectNavLink} ${styles.active}` : styles.projectNavLink)} 
          end // 'end' prop ensures this link is only active on the exact path
        >
          نظرة عامة
        </NavLink>
        <NavLink 
          to={`/projects/${projectId}/privacy`} 
          className={({ isActive }) => (isActive ? `${styles.projectNavLink} ${styles.active}` : styles.projectNavLink)}
        >
          سياسة الخصوصية
        </NavLink>
        <NavLink 
          to={`/projects/${projectId}/changelog`} 
          className={({ isActive }) => (isActive ? `${styles.projectNavLink} ${styles.active}` : styles.projectNavLink)}
        >
          سجل التحديثات
        </NavLink>
      </nav>

      {/* The main content area where nested routes will be rendered */}
      <main className={styles.projectContent}>
        {/* 
          The <Outlet> component from react-router-dom renders the matched child route component.
          We pass the 'project' data to the child components via its 'context' prop.
          Child components (ProjectOverview, ProjectPrivacyPolicy, etc.) can access this data
          using the 'useOutletContext' hook.
        */}
        <Outlet context={{ project }} />
      </main>
    </div>
  );
};

export default ProjectDetailPage;