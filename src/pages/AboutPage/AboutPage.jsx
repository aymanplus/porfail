// src/pages/AboutPage/AboutPage.jsx (النسخة المحسّنة)
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';
import myImage from '../../assets/images/aymanpluss.JPG';

// 1. استيراد مكون الزر الموحد
import Button from '../../components/Button/Button'; 

// استيراد الأيقونات
import { FaLightbulb, FaCode, FaUsers, FaRocket, FaPaperPlane, FaDownload, FaEye } from 'react-icons/fa';

// بيانات المبادئ تبقى كما هي، فهي منظمة بشكل جيد
const principles = [
  { icon: <FaLightbulb />, title: 'حل المشكلات', description: 'أستمتع بتحليل التحديات المعقدة وتحويلها إلى حلول برمجية بسيطة وأنيقة.' },
  { icon: <FaCode />, title: 'كود نظيف وفعّال', description: 'أؤمن بأهمية كتابة كود منظم وقابل للصيانة، مما يضمن استقرار التطبيقات على المدى الطويل.' },
  { icon: <FaUsers />, title: 'التركيز على المستخدم', description: 'هدفي الأول هو بناء تجارب استخدام سهلة وممتعة تلبي احتياجات المستخدم وتوقعاته.' },
];

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      
      {/* ===== القسم الأول: التقديم (مع أنيميشن) ===== */}
      <section className={styles.introSection}>
        <div className={styles.imageContainer}>
          <img src={myImage} alt="صورة شخصية لـ ايمن خالد" className={styles.profileImage} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>مطور تطبيقات بشغف للإبداع</h1>
          <p>مرحباً، أنا <strong>ايمن خالد</strong>. مبرمج أجد متعة حقيقية في تحويل الأفكار إلى حلول برمجية ملموسة. رحلتي في هذا العالم بدأت من شغفي بالتصميم وحل المشكلات، ومنذ ذلك الحين وأنا في تعلم مستمر لصقل مهاراتي.</p>
          <p>أركز حالياً على تقنيات الويب والموبايل الحديثة مثل React و Flutter لبناء واجهات تفاعلية وتطبيقات سريعة الأداء.</p>
        </div>
      </section>

      {/* ===== القسم الثاني: مبادئي الأساسية (مع أنيميشن) ===== */}
      <section className={styles.principlesSection}>
        <h2 className={styles.sectionTitle}>منهجيتي في العمل</h2>
        <div className={styles.cardsContainer}>
          {principles.map((p, index) => (
            <div key={index} className={styles.principleCard}>
              <div className={styles.cardIcon}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDescription}>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== القسم الثالث: الدعوة لاتخاذ إجراء (CTA) (مع أنيميشن واستخدام مكون Button) ===== */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>هل لديك فكرة مشروع؟</h2>
        <p className={styles.ctaSubtitle}>دعنا نحولها إلى واقع. أنا مستعد دائماً لمناقشة المشاريع الجديدة والفرص المثيرة.</p>
        
        {/* 2. استخدام مكون Button بدلاً من الروابط المنمّقة يدوياً */}
        <div className={styles.ctaButtons}>
          <Button as={Link} to="/projects" variant="primary">
            <FaRocket /> تصفح مشاريعي
          </Button>
          <Button as={Link} to="/contact" variant="secondary">
            <FaPaperPlane /> تواصل معي
          </Button>
          <Button as="a" href="https://aymanplus.github.io/cvAyman/" target="_blank" rel="noopener noreferrer" variant="secondary">
            <FaEye /> السيرة الذاتية أونلاين
          </Button>
          <Button as="a" href="/ayman-cv.pdf" download variant="secondary">
            <FaDownload /> تحميل السيرة الذاتية
          </Button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;