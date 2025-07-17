// src/components/Button/Button.jsx (النسخة المحسّنة)
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * مكون زر مرن وقابل لإعادة الاستخدام مع دعم للأحجام والحالات المختلفة.
 * يمكن استخدامه كزر عادي، رابط، أو أي مكون آخر عبر خاصية `as`.
 *
 * @param {object} props - الخصائص.
 * @param {React.ElementType} [props.as='button'] - العنصر أو المكون الذي سيتم عرضه (مثل 'button', 'a', Link).
 * @param {React.ReactNode} props.children - المحتوى داخل الزر.
 * @param {string} [props.variant='primary'] - شكل الزر ('primary' أو 'secondary').
 * @param {string} [props.size='medium'] - حجم الزر ('small', 'medium', 'large').
 * @param {boolean} [props.disabled=false] - لتحديد ما إذا كان الزر معطلاً.
 * @param {string} [props.className=''] - كلاسات CSS إضافية.
 */
const Button = forwardRef(
  (
    {
      as: Component = 'button', // 1. خاصية `as` لجعل المكون مرناً
      children,
      variant = 'primary',
      size = 'medium',       // 2. خاصية `size` للتحكم بالحجم
      disabled = false,        // 3. خاصية `disabled` لدعم حالة التعطيل
      className = '',
      ...rest                 // 4. تمرير أي خصائص أخرى (مثل onClick, href, to)
    },
    ref
  ) => {
    // دمج الكلاسات بطريقة أكثر أمانًا
    const buttonClasses = [
      styles.button,
      styles[variant],
      styles[size],
      disabled ? styles.disabled : '', // إضافة كلاس التعطيل
      className,
    ]
      .filter(Boolean) // إزالة القيم الفارغة لضمان عدم وجود مسافات إضافية
      .join(' ');

    return (
      <Component
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        // منع التفاعل مع الروابط المعطلة
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : rest.onClick}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

// اسم عرض للمكون لتسهيل التصحيح في React DevTools
Button.displayName = 'Button';

// تحديث أنواع الخصائص لتشمل الإضافات الجديدة
Button.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;