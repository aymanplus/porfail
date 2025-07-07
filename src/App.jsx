// src/App.jsx

// 1. استيراد المكتبات والمكونات الأساسية
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// 2. استيراد جميع مكونات الصفحات
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';

// 3. استيراد المكونات الفرعية (المتداخلة) لصفحة تفاصيل المشروع
import ProjectOverview from './pages/ProjectDetailPage/ProjectOverview';
import ProjectPrivacyPolicy from './pages/ProjectDetailPage/ProjectPrivacyPolicy';
import ProjectChangelog from './pages/ProjectDetailPage/ProjectChangelog';

// 4. (مقترح) إنشاء مكون بسيط لصفحة "غير موجود" للتعامل مع الروابط الخاطئة
// هذا المكون سيظهر إذا حاول المستخدم الوصول إلى رابط غير معرف في المسارات أدناه
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
    <Router>
      {/* شريط التنقل يظهر في جميع الصفحات */}
      <Navbar />
      
      {/* حاوية المسارات التي تبدل بين الصفحات حسب الرابط الحالي */}
      <Routes>
        {/* المسارات الأساسية للتطبيق */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        
        {/* المسار الديناميكي والمتداخل لصفحات المشاريع */}
        {/* هذا المسار يعرض تفاصيل المشروع بناءً على الـ ID في الرابط (مثال: /projects/my-project-id) */}
        <Route path="/projects/:projectId" element={<ProjectDetailPage />}>
          {/* هذه هي الصفحات الفرعية داخل صفحة المشروع */}
          <Route index element={<ProjectOverview />} /> {/* الصفحة الافتراضية (نظرة عامة) */}
          <Route path="privacy" element={<ProjectPrivacyPolicy />} /> {/* صفحة سياسة الخصوصية */}
          <Route path="changelog" element={<ProjectChangelog />} /> {/* صفحة سجل التحديثات */}
        </Route>
        
        <Route path="/contact" element={<ContactPage />} />

        {/* (مهم جداً) مسار شامل للتعامل مع أي رابط غير موجود (صفحة 404) */}
        {/* يجب أن يكون هذا المسار هو الأخير دائماً في قائمة <Routes> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;