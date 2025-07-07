// src/pages/AboutPage/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';
import myImage from '../../assets/images/aymanpluss.JPG';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>من أنا؟</h1>
      <div className={styles.content}>
        <div className={styles.textSection}>
          {/* تم تغيير العنوان الفرعي هنا */}
          <h2>مرحباً، أنا ايمن خالد</h2> 
          <p>
            مبرمج شغوف متخصص في تطوير التطبيقات، أجد متعة حقيقية في تحويل الأفكار إلى حلول برمجية عملية ومفيدة. بدأت رحلتي في عالم البرمجة من خلال حبي للتصميم وحل المشكلات، ومنذ ذلك الحين وأنا أتعلم وأطور من مهاراتي باستمرار.
          </p>
          <p>
            أركز حالياً على تقنيات الويب الحديثة مثل React لبناء واجهات مستخدم تفاعلية وسريعة. هدفي هو بناء تطبيقات لا تكون فعالة فحسب، بل تقدم أيضاً تجربة استخدام ممتعة وسلسة.
          </p>
          <a href="/ayman-cv.pdf" download className={styles.cvButton}>
            تحميل السيرة الذاتية
          </a>
        </div>
        <div className={styles.imageSection}>
          <img src={myImage} alt="صورة شخصية لـ ايمن خالد" className={styles.profileImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;