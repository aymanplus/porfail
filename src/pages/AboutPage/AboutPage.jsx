// src/pages/AboutPage/AboutPage.jsx (النسخة الجديدة والاحترافية)
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';
import myImage from '../../assets/images/aymanpluss.JPG';

// استيراد أيقونات للمبادئ والأزرار
import { FaLightbulb, FaCode, FaUsers, FaRocket, FaPaperPlane, FaDownload } from 'react-icons/fa';

// بيانات المبادئ لتسهيل إدارتها
const principles = [
  {
    icon: <FaLightbulb />,
    title: 'حل المشكلات',
    description: 'أستمتع بتحليل التحديات المعقدة وتحويلها إلى حلول برمجية بسيطة وأنيقة.',
  },
  {
    icon: <FaCode />,
    title: 'كود نظيف وفعّال',
    description: 'أؤمن بأهمية كتابة كود منظم وقابل للصيانة، مما يضمن استقرار التطبيقات على المدى الطويل.',
  },
  {
    icon: <FaUsers />,
    title: 'التركيز على المستخدم',
    description: 'هدفي الأول هو بناء تجارب استخدام سهلة وممتعة تلبي احتياجات المستخدم وتوقعاته.',
  },
];

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      
      {/* ===== القسم الأول: التقديم ===== */}
      <section className={styles.introSection}>
        <div className={styles.imageContainer}>
          <img src={myImage} alt="صورة شخصية لـ ايمن خالد" className={styles.profileImage} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>مطور تطبيقات بشغف للإبداع</h1>
          <p>
            مرحباً، أنا <strong>ايمن خالد</strong>. مبرمج أجد متعة حقيقية في تحويل الأفكار إلى حلول برمجية ملموسة. رحلتي في هذا العالم بدأت من شغفي بالتصميم وحل المشكلات، ومنذ ذلك الحين وأنا في تعلم مستمر لصقل مهاراتي.
          </p>
          <p>
            أركز حالياً على تقنيات الويب والموبايل الحديثة مثل React و Flutter لبناء واجهات تفاعلية وتطبيقات سريعة الأداء.
          </p>
        </div>
      </section>

      {/* ===== القسم الثاني: مبادئي الأساسية ===== */}
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

      {/* ===== القسم الثالث: الدعوة لاتخاذ إجراء (CTA) ===== */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>هل لديك فكرة مشروع؟</h2>
        <p className={styles.ctaSubtitle}>
          دعنا نحولها إلى واقع. أنا مستعد دائماً لمناقشة المشاريع الجديدة والفرص المثيرة.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            <FaRocket /> تصفح مشاريعي
          </Link>
          <Link to="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            <FaPaperPlane /> تواصل معي
          </Link>
        </div>
        <a href="/ayman-cv.pdf" download className={styles.cvLink}>
          <FaDownload /> أو قم بتحميل سيرتي الذاتية
        </a>
      </section>

    </div>
  );
};

export default AboutPage;