import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  currentPath: string;
  navigate: (href: string) => void;
}

export function Navbar({ currentPath, navigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E7E9E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-[#245747] rounded-lg p-1"
          aria-label={`${siteConfig.brandName} Homepage`}
        >
          <div className="w-9 h-9 rounded-lg bg-[#245747] flex items-center justify-center text-[#FAF9F6] shadow-sm">
            <BookOpen className="w-5 h-5 text-[#DCE9DF]" />
          </div>
          <div>
            <span className="font-bold text-lg text-[#252B28] tracking-tight block leading-tight">
              {siteConfig.brandName}
            </span>
            <span className="text-[11px] text-[#69736D] hidden sm:block leading-none">
              Free English Practice
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-[#252B28]" aria-label="Main Navigation">
          <button
            onClick={() => handleLinkClick('/quizzes/')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              currentPath === '/quizzes/' ? 'text-[#245747] bg-[#DCE9DF]/60 font-semibold' : 'hover:text-[#245747] hover:bg-[#E7E9E5]/50'
            }`}
          >
            All Quizzes
          </button>
          <button
            onClick={() => handleLinkClick('/english-grammar-quizzes/')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              currentPath.startsWith('/english-grammar-quizzes') ? 'text-[#245747] bg-[#DCE9DF]/60 font-semibold' : 'hover:text-[#245747] hover:bg-[#E7E9E5]/50'
            }`}
          >
            Grammar
          </button>
          <button
            onClick={() => handleLinkClick('/english-vocabulary-tests/')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              currentPath.startsWith('/english-vocabulary-tests') ? 'text-[#245747] bg-[#DCE9DF]/60 font-semibold' : 'hover:text-[#245747] hover:bg-[#E7E9E5]/50'
            }`}
          >
            Vocabulary
          </button>
          <button
            onClick={() => handleLinkClick('/english-level-practice/')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              currentPath.startsWith('/english-level-practice') ? 'text-[#245747] bg-[#DCE9DF]/60 font-semibold' : 'hover:text-[#245747] hover:bg-[#E7E9E5]/50'
            }`}
          >
            Level Practice
          </button>
          <button
            onClick={() => handleLinkClick('/business-english/')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              currentPath.startsWith('/business-english') ? 'text-[#245747] bg-[#DCE9DF]/60 font-semibold' : 'hover:text-[#245747] hover:bg-[#E7E9E5]/50'
            }`}
          >
            Business
          </button>
          <button
            onClick={() => handleLinkClick('/english-learning-guides/')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              currentPath.startsWith('/english-learning-guides') ? 'text-[#245747] bg-[#DCE9DF]/60 font-semibold' : 'hover:text-[#245747] hover:bg-[#E7E9E5]/50'
            }`}
          >
            Guides
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('/ai-quiz-generator/')}
            className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-gradient-to-r from-amber-50 via-emerald-50 to-teal-50 hover:from-amber-100 hover:to-emerald-100 px-3.5 py-2 rounded-xl transition-all border border-amber-300/80 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>AI Practice</span>
            <span className="text-[10px] bg-amber-400 text-zinc-950 px-1.5 py-0.2 rounded font-extrabold uppercase ml-0.5">Free</span>
          </button>
          <button
            onClick={() => handleLinkClick('/quizzes/')}
            className="bg-gradient-to-r from-[#245747] to-teal-800 hover:from-[#1b4336] hover:to-teal-900 text-[#FAF9F6] text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Explore Quizzes
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleLinkClick('/ai-quiz-generator/')}
            className="p-2 text-[#245747] bg-[#DCE9DF]/70 rounded-lg"
            aria-label="AI Practice"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#252B28] hover:text-[#245747] focus:outline-none focus:ring-2 focus:ring-[#245747] rounded-lg"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7E9E5] bg-[#FFFFFF] px-4 pt-3 pb-6 space-y-1 shadow-lg">
          <button
            onClick={() => handleLinkClick('/quizzes/')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#252B28] hover:bg-[#FAF9F6] hover:text-[#245747]"
          >
            All Quizzes
          </button>
          <button
            onClick={() => handleLinkClick('/english-grammar-quizzes/')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#252B28] hover:bg-[#FAF9F6] hover:text-[#245747]"
          >
            Grammar Quizzes
          </button>
          <button
            onClick={() => handleLinkClick('/english-vocabulary-tests/')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#252B28] hover:bg-[#FAF9F6] hover:text-[#245747]"
          >
            Vocabulary Tests
          </button>
          <button
            onClick={() => handleLinkClick('/english-level-practice/')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#252B28] hover:bg-[#FAF9F6] hover:text-[#245747]"
          >
            Level Practice (B1 / B2)
          </button>
          <button
            onClick={() => handleLinkClick('/business-english/')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#252B28] hover:bg-[#FAF9F6] hover:text-[#245747]"
          >
            Business English
          </button>
          <button
            onClick={() => handleLinkClick('/english-learning-guides/')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#252B28] hover:bg-[#FAF9F6] hover:text-[#245747]"
          >
            Learning Guides
          </button>
          <button
            onClick={() => handleLinkClick('/ai-quiz-generator/')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#245747] bg-[#DCE9DF]/50 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#245747]" />
              AI Practice & Generator
            </span>
            <span className="text-[11px] bg-[#245747] text-[#FAF9F6] px-2 py-0.5 rounded font-bold">Free</span>
          </button>
          <div className="pt-3 border-t border-[#E7E9E5] flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('/about/')}
              className="text-left px-3 py-1.5 text-xs text-[#69736D] hover:text-[#252B28]"
            >
              About Clear English Quiz
            </button>
            <button
              onClick={() => handleLinkClick('/contact/')}
              className="text-left px-3 py-1.5 text-xs text-[#69736D] hover:text-[#252B28]"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
