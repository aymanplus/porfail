// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
// (1) استيراد Link
import { Link } from 'react-router-dom'; 
import { FaGithub, FaReact, FaNodeJs, FaFly, FaDatabase } from 'react-icons/fa';
import { SiDart, SiFlutter, SiGoogleads } from 'react-icons/si';

const getTechIcon = (tech) => {
  const lowerTech = tech.toLowerCase();
  if (lowerTech.includes('flutter')) return <SiFlutter title="Flutter" />;
  if (lowerTech.includes('dart')) return <SiDart title="Dart" />;
  if (lowerTech.includes('react')) return <FaReact title="React" />;
  if (lowerTech.includes('node')) return <FaNodeJs title="Node.js" />;
  if (lowerTech.includes('sqflite')) return <FaDatabase title="SQFLite" />;
  if (lowerTech.includes('provider')) return <FaFly title="Provider" />;
  if (lowerTech.includes('google mobile ads')) return <SiGoogleads title="Google Mobile Ads" />;
  return null;
};

// (2) تحديث الـ props
function ProjectCard({ id, title, description, imageUrl, techStack }) {
  return (
    // (3) تحويل البطاقة إلى رابط
    <Link to={`/projects/${id}`} className="project-card-link">
      <div className="project-card">
        <div className="project-image-container">
          <img src={imageUrl} alt={title} className="project-image" />
        </div>
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          
          <div className="project-footer">
            <div className="tech-stack">
              {techStack.map(tech => (
                <div key={tech} className="tech-icon-tooltip">
                  {getTechIcon(tech)}
                  <span className="tooltip-text">{tech}</span>
                </div>
              ))}
            </div>
            {/* (4) تغيير الزر ليظهر "عرض التفاصيل" */}
            <div className="project-link-imitation">
              <span>عرض التفاصيل</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;