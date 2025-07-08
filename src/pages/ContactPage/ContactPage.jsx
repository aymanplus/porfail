// src/pages/ContactPage/ContactPage.jsx
import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'; 

const ContactPage = () => {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: null,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormState({ ...formState, submitting: true, error: null });

    const formData = new FormData(event.target);
    
    try {
      const response = await fetch('https://formspree.io/f/xkgbljej', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: null });
      } else {
        const data = await response.json();
        const errorMessage = data.errors ? data.errors.map(e => e.message).join(', ') : 'حدث خطأ ما، يرجى المحاولة مرة أخرى.';
        setFormState({ submitting: false, succeeded: false, error: errorMessage });
      }
    } catch (error) {
      // ===== التصحيح هنا =====
      // الآن نستخدم متغير 'error' لطباعة الخطأ في الكونسول
      console.error("Form submission error:", error); 
      setFormState({ submitting: false, succeeded: false, error: 'حدث خطأ في الشبكة، يرجى التحقق من اتصالك.' });
      // =======================
    }
  };


  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>لنتواصل معاً</h1>
      <p className={styles.subtitle}>
        هل لديك استفسار، فرصة عمل، أو ترغب فقط في قول مرحباً؟<br/>
        لا تتردد في ملء النموذج أدناه أو التواصل عبر حساباتي.
      </p>

      {formState.succeeded ? (
        <div className={styles.successMessage}>
          <h3>شكراً لرسالتك!</h3>
          <p>لقد تم استلام رسالتك بنجاح. سأقوم بالرد عليك في أقرب وقت ممكن.</p>
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className={styles.contactForm}
        >
          <div className={styles.inputGroup}>
            <input type="text" name="name" placeholder="الاسم الكامل" required disabled={formState.submitting} />
            <FaUser className={styles.icon} />
          </div>
          
          <div className={styles.inputGroup}>
            <input type="email" name="email" placeholder="البريد الإلكتروني" required disabled={formState.submitting} />
            <FaEnvelope className={styles.icon} />
          </div>

          <div className={styles.inputGroup}>
            <textarea name="message" rows="7" placeholder="رسالتك..." required disabled={formState.submitting}></textarea>
          </div>

          {formState.error && <p className={styles.errorMessage}>{formState.error}</p>}

          <button type="submit" disabled={formState.submitting}>
            <FaPaperPlane />
            {formState.submitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
          </button>
          
        </form>
      )}

      <div className={styles.socialLinks}>
        <p>أو تواصل مباشرة عبر:</p>
        <div className={styles.socialIconsContainer}>
          <a href="https://github.com/aymanpluss" target="_blank" rel="noopener noreferrer" title="GitHub" className={styles.github}>
            <FaGithub />
          </a>
          <a href="https://wa.me/966509312930" target="_blank" rel="noopener noreferrer" title="WhatsApp" className={styles.whatsapp}>
            <FaWhatsapp />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" title="LinkedIn" className={styles.linkedin}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;