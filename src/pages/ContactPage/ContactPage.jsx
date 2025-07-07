// src/pages/ContactPage/ContactPage.jsx
import React from 'react';
import styles from './ContactPage.module.css';
// **جديد:** استيراد أيقونات إضافية
import { FaGithub, FaLinkedin, FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'; 

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>لنتواصل معاً</h1>
      <p className={styles.subtitle}>
        هل لديك استفسار، فرصة عمل، أو ترغب فقط في قول مرحباً؟<br/>
        لا تتردد في ملء النموذج أدناه أو التواصل عبر حساباتي.
      </p>

      <form
        action="https://formspree.io/f/YOUR_UNIQUE_ID" // استبدل هذا برابطك من Formspree
        method="POST"
        className={styles.contactForm}
      >
        {/* **جديد:** إضافة حاوية لكل حقل مع أيقونته */}
        <div className={styles.inputGroup}>
          <input type="text" name="name" placeholder="الاسم الكامل" required />
          <FaUser className={styles.icon} />
        </div>
        
        <div className={styles.inputGroup}>
          <input type="email" name="email" placeholder="البريد الإلكتروني" required />
          <FaEnvelope className={styles.icon} />
        </div>

        <div className={styles.inputGroup}>
          <textarea name="message" rows="7" placeholder="رسالتك..." required></textarea>
        </div>

        <button type="submit">
          <FaPaperPlane />
          إرسال الرسالة
        </button>
      </form>

      <div className={styles.socialLinks}>
        <p>أو تواصل مباشرة عبر:</p>
        <div className={styles.socialIconsContainer}>
          <a href="https://github.com/aymanplus" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          {/* أضف أيقونات أخرى هنا بنفس الطريقة */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
