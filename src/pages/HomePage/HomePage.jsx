// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// **تحديث:** استيراد أيقونات إضافية للخدمات الجديدة وللأزرار
import { FaReact, FaServer, FaPalette, FaPaperPlane, FaRocket } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">ايمن خالد</h1>
        
        {/* **تحديث:** عنوان فرعي جديد يعكس جميع مهاراتك */}
        <p className="hero-subtitle">
          مبرمج Full-Stack، أصمم وأبني تجارب ويب وموبايل متكاملة، من تصميم الواجهات (UI/UX) إلى تطوير الخوادم (Backend).
        </p>

        {/* **تحديث:** إضافة خدمات الباك اند و UI/UX */}
        <div className="hero-services">
          <div className="service-item">
            <FaReact className="service-icon react" />
            <span>واجهات ويب (React)</span>
          </div>
          <div className="service-item">
            <SiFlutter className="service-icon flutter" />
            <span>تطبيقات موبايل (Flutter)</span>
          </div>
          <div className="service-item">
            <FaServer className="service-icon backend" />
            <span>تطوير الباك اند (Backend)</span>
          </div>
          <div className="service-item">
            <FaPalette className="service-icon design" />
            <span>تصميم واجهات (UI/UX)</span>
          </div>
        </div>

        {/* **تحديث:** إضافة أيقونات للأزرار وتحسين الكلاسات */}
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            <FaRocket />
            <span>شاهد أعمالي</span>
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <FaPaperPlane />
            <span>تواصل معي</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;