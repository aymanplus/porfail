// src/components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * مكون زر قابل لإعادة الاستخدام مع أشكال مختلفة.
 *
 * @param {object} props - الخصائص.
 * @param {React.ReactNode} props.children - المحتوى داخل الزر (نص أو أيقونة).
 * @param {function} props.onClick - الدالة التي ستُنفذ عند النقر على الزر.
 * @param {string} [props.type='button'] - نوع الزر (button, submit, reset).
 * @param {string} [props.variant='primary'] - شكل الزر ('primary' أو 'secondary').
 * @param {string} [props.className=''] - كلاسات CSS إضافية لتخصيص النمط.
 */
const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  // دمج الكلاسات: الكلاس الأساسي + كلاس الشكل + أي كلاس إضافي
  const buttonClasses = `
    ${styles.button} 
    ${styles[variant]} 
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

// تعريف أنواع الخصائص لضمان الاستخدام الصحيح للمكون
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

export default Button;