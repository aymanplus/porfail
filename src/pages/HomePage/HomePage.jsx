// src/pages/HomePage/HomePage.jsx (النسخة المحسّنة)
import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaServer, FaPalette, FaPaperPlane, FaRocket } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

// **تغيير رئيسي:** سنستبدل الأزرار المخصصة بمكون الزر القابل لإعادة الاستخدام
import Button from '../../components/Button/Button'; 

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* جديد: حاوية الشبكة لتقسيم المحتوى */}
      <div className="hero-grid">
        
        {/* --- الجزء الأول: النصوص والأزرار --- */}
        <div className="hero-text-content">
          <h1 className="hero-title">ايمن خالد</h1>
          <p className="hero-subtitle">
            مبرمج Full-Stack، أصمم وأبني تجارب ويب وموبايل متكاملة، من تصميم الواجهات (UI/UX) إلى تطوير الخوادم (Backend).
          </p>
          
          {/* **تحسين:** استخدام مكون Button لتوحيد التصميم */}
          <div className="hero-buttons">
            <Link to="/projects">
              <Button variant="primary" className="hero-btn">
                <FaRocket />
                <span>شاهد أعمالي</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="hero-btn">
                <FaPaperPlane />
                <span>تواصل معي</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* --- الجزء الثاني: بطاقات الخدمات --- */}
        <div className="hero-services-container">
          <div className="service-card">
            <FaReact className="service-icon react" />
            <span>واجهات ويب (React)</span>
          </div>
          <div className="service-card">
            <SiFlutter className="service-icon flutter" />
            <span>تطبيقات موبايل (Flutter)</span>
          </div>
          <div className="service-card">
            <FaServer className="service-icon backend" />
            <span>تطوير الباك اند</span>
          </div>
          <div className="service-card">
            <FaPalette className="service-icon design" />
            <span>تصميم واجهات (UI/UX)</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;