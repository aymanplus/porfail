// src/pages/ProjectsPage/ProjectsPage.jsx
import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './ProjectsPage.css';
import { projectsData } from '../../data/projectsData'; // <-- استيراد البيانات الجديدة

// تحويل كائن البيانات إلى مصفوفة ليسهل عمل map
const myProjects = Object.values(projectsData);

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">أبرز مشاريعي</h1>
      <p className="projects-subtitle">
        مجموعة من المشاريع التي قمت بتطويرها باستخدام Flutter و React، مع التركيز على تجربة المستخدم والأداء.
      </p>
      <div className="projects-grid">
        {myProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id} // <-- تمرير الـ ID
            title={project.title}
            description={project.shortDescription} // <-- استخدام الوصف القصير
            imageUrl={project.imageUrl}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;