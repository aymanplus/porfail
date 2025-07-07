// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // استيراد أيقونات
import './Navbar.css';

const Navbar = () => {
  // حالة لتتبع فتح/إغلاق القائمة
  const [isOpen, setIsOpen] = useState(false);

  // دالة لتبديل الحالة
  const toggleMenu = () => setIsOpen(!isOpen);

  // دالة لإغلاق القائمة عند الضغط على رابط (مهم لتجربة المستخدم في الجوال)
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
        ايمن خالد
      </Link>

      {/* أيقونة القائمة للجوال */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* قائمة الروابط - نضيف لها كلاس active عند الفتح */}
      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" onClick={closeMobileMenu} end>
            الرئيسية
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
            من أنا
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skills" className="nav-link" onClick={closeMobileMenu}>
            مهاراتي
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="nav-link" onClick={closeMobileMenu}>
            مشاريعي
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>
            تواصل معي
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;