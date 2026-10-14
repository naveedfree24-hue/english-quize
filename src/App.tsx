import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AllQuizzesPage } from './pages/AllQuizzesPage';
import { CategoryPage } from './pages/CategoryPage';
import { QuizDetailPage } from './pages/QuizDetailPage';
import { GuidesIndexPage } from './pages/GuidesIndexPage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import { AiQuizGeneratorPage } from './pages/AiQuizGeneratorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { TermsPage } from './pages/TermsPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getQuizBySlug } from './data/quizzes';
import { getGuideBySlug } from './data/guides';
import { categories } from './data/categories';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Listen to popstate (browser back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler
  const navigate = (href: string) => {
    let cleanHref = href;
    if (!cleanHref.startsWith('/')) {
      cleanHref = `/${cleanHref}`;
    }
    window.history.pushState({}, '', cleanHref);
    setCurrentPath(cleanHref);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching
  const renderCurrentPage = () => {
    // Normalise path (remove trailing slash for route checking, except root)
    let path = currentPath.trim();
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // 1. Root Homepage
    if (path === '' || path === '/') {
      return <HomePage navigate={navigate} />;
    }

    // 2. All Quizzes
    if (path === '/quizzes') {
      return <AllQuizzesPage navigate={navigate} />;
    }

    // 3. AI Quiz Generator
    if (path === '/ai-quiz-generator') {
      return <AiQuizGeneratorPage navigate={navigate} />;
    }

    // 4. Learning Guides Index
    if (path === '/english-learning-guides') {
      return <GuidesIndexPage navigate={navigate} />;
    }

    // 5. Learning Guide Detail
    if (path.startsWith('/english-learning-guides/')) {
      const guideSlug = path.replace('/english-learning-guides/', '');
      const guide = getGuideBySlug(guideSlug);
      if (guide) {
        return <GuideDetailPage guide={guide} navigate={navigate} />;
      }
      return <NotFoundPage navigate={navigate} />;
    }

    // 6. Category Pages
    const categoryKey = path.replace(/^\//, '');
    if (categories[categoryKey]) {
      return <CategoryPage categorySlug={categoryKey} navigate={navigate} />;
    }

    // 7. Individual Quiz Pages
    const pathParts = path.split('/').filter(Boolean);
    if (pathParts.length === 2) {
      const [catSlug, qSlug] = pathParts;
      if (categories[catSlug]) {
        const quiz = getQuizBySlug(qSlug);
        if (quiz && quiz.categorySlug === catSlug) {
          return <QuizDetailPage quiz={quiz} navigate={navigate} />;
        }
      }
    }

    // 8. Legal & Trust Pages
    if (path === '/about') {
      return <AboutPage navigate={navigate} />;
    }
    if (path === '/contact') {
      return <ContactPage navigate={navigate} />;
    }
    if (path === '/privacy-policy') {
      return <PrivacyPolicyPage navigate={navigate} />;
    }
    if (path === '/cookie-policy') {
      return <CookiePolicyPage navigate={navigate} />;
    }
    if (path === '/terms') {
      return <TermsPage navigate={navigate} />;
    }
    if (path === '/affiliate-disclosure') {
      return <AffiliateDisclosurePage navigate={navigate} />;
    }

    // Default: 404 Not Found
    return <NotFoundPage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#252B28]">
      <Navbar currentPath={currentPath} navigate={navigate} />
      
      {/* Main Container with telephone mobile bottom padding */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-10 pb-28 sm:pb-12">
        {renderCurrentPage()}
      </main>

      <Footer navigate={navigate} />

      {/* Telephone / Mobile Version Bottom Navigation Bar */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E7E9E5] px-2 py-1.5 flex items-center justify-around shadow-2xl"
      >
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
            currentPath === '/' ? 'text-[#245747] font-extrabold' : 'text-[#69736D]'
          }`}
          aria-label="Home"
        >
          <Home className={`w-5 h-5 ${currentPath === '/' ? 'text-[#245747]' : 'text-[#69736D]'}`} />
          <span className="text-[10px]">Home</span>
        </button>

        <button
          onClick={() => navigate('/quizzes/')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
            currentPath.startsWith('/quizzes') || currentPath.includes('-quizzes') || currentPath.includes('-tests')
              ? 'text-[#245747] font-extrabold'
              : 'text-[#69736D]'
          }`}
          aria-label="Quizzes"
        >
          <BookOpen className={`w-5 h-5 ${currentPath.startsWith('/quizzes') ? 'text-[#245747]' : 'text-[#69736D]'}`} />
          <span className="text-[10px]">Quizzes</span>
        </button>

        <button
          onClick={() => navigate('/ai-quiz-generator/')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
            currentPath === '/ai-quiz-generator/' || currentPath === '/ai-quiz-generator'
              ? 'text-amber-600 font-extrabold'
              : 'text-[#69736D]'
          }`}
          aria-label="AI Practice"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          </div>
          <span className="text-[10px] font-bold">AI Tutor</span>
        </button>

        <button
          onClick={() => navigate('/english-learning-guides/')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
            currentPath.startsWith('/english-learning-guides') ? 'text-[#245747] font-extrabold' : 'text-[#69736D]'
          }`}
          aria-label="Guides"
        >
          <GraduationCap className={`w-5 h-5 ${currentPath.startsWith('/english-learning-guides') ? 'text-[#245747]' : 'text-[#69736D]'}`} />
          <span className="text-[10px]">Guides</span>
        </button>
      </nav>
    </div>
  );
}
