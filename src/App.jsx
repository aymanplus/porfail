// src/App.jsx

// 1. استيراد المكتبات والمكونات الأساسية
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import LazyWrapper from './components/LazyWrapper';
import ErrorBoundary from './components/ErrorBoundary';

// 2. استيراد lazy للصفحات لتحسين الأداء
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage/SkillsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage/ProjectDetailPage'));

// 3. استيراد المكونات الفرعية (المتداخلة) لصفحة تفاصيل المشروع
const ProjectOverview = lazy(() => import('./pages/ProjectDetailPage/ProjectOverview'));
const ProjectPrivacyPolicy = lazy(() => import('./pages/ProjectDetailPage/ProjectPrivacyPolicy'));
const ProjectChangelog = lazy(() => import('./pages/ProjectDetailPage/ProjectChangelog'));

// 4. مكون صفحة "غير موجود"
const NotFoundPage = () => (
  <div style={{
    textAlign: 'center',
    padding: '5rem 2rem',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h1 style={{ fontSize: 'clamp(3rem, 15vw, 6rem)', margin: 0 }}>404</h1>
    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>الصفحة غير موجودة</h2>
    <p style={{ maxWidth: '450px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
      عفواً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون قد حُذفت أو تم تغيير الرابط.
    </p>
    <Link to="/" style={{
      display: 'inline-block',
      background: 'var(--accent-gradient)',
      color: 'white',
      padding: '14px 32px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'transform 0.2s ease'
    }}>
      العودة إلى الصفحة الرئيسية
    </Link>
  </div>
);


// 5. المكون الرئيسي للتطبيق الذي يجمع كل شيء
function App() {
  return (
    <ErrorBoundary>
      <Router>
        {/* شريط التنقل يظهر في جميع الصفحات وهو الآن خارج حاوية المحتوى */}
        <Navbar />
        
        {/* === التعديل الرئيسي هنا === */}
        {/* حاوية جديدة للمحتوى الرئيسي لتطبيق المساحات الجانبية والتوسيط */}
        <main className="main-content">
          <Routes>
            {/* المسارات الأساسية للتطبيق */}
            <Route path="/" element={<LazyWrapper><HomePage /></LazyWrapper>} />
            <Route path="/about" element={<LazyWrapper><AboutPage /></LazyWrapper>} />
            <Route path="/skills" element={<LazyWrapper><SkillsPage /></LazyWrapper>} />
            <Route path="/projects" element={<LazyWrapper><ProjectsPage /></LazyWrapper>} />
            
            {/* المسار الديناميكي والمتداخل لصفحات المشاريع */}
            <Route path="/projects/:projectId" element={<LazyWrapper><ProjectDetailPage /></LazyWrapper>}>
              <Route index element={<LazyWrapper><ProjectOverview /></LazyWrapper>} />
              <Route path="privacy" element={<LazyWrapper><ProjectPrivacyPolicy /></LazyWrapper>} />
              <Route path="changelog" element={<LazyWrapper><ProjectChangelog /></LazyWrapper>} />
            </Route>
            
            <Route path="/contact" element={<LazyWrapper><ContactPage /></LazyWrapper>} />

            {/* مسار شامل للتعامل مع أي رابط غير موجود (صفحة 404) */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        {/* === نهاية التعديل الرئيسي === */}
      </Router>
    </ErrorBoundary>
  );
}

export default App;