import React from 'react';
import { Clock, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Quiz } from '../types';

interface QuizCardProps {
  quiz: Quiz;
  navigate: (href: string) => void;
}

export function QuizCard({ quiz, navigate }: QuizCardProps) {
  const getCategoryPath = (catSlug: string) => `/${catSlug}/${quiz.slug}/`;

  // Level badge colors
  const getLevelBadgeClass = (lvl: string) => {
    switch (lvl) {
      case 'A2':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'B1':
        return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'B2':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'C1':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-[#DCE9DF] text-[#245747] border-[#C5D9CA]';
    }
  };

  // Category pill colors
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'english-grammar-quizzes':
        return { label: 'Grammar', tag: 'text-emerald-700 bg-emerald-50' };
      case 'english-vocabulary-tests':
        return { label: 'Vocabulary', tag: 'text-amber-700 bg-amber-50' };
      case 'english-level-practice':
        return { label: 'Level Practice', tag: 'text-teal-700 bg-teal-50' };
      case 'business-english':
        return { label: 'Business', tag: 'text-indigo-700 bg-indigo-50' };
      default:
        return { label: 'Quiz', tag: 'text-zinc-700 bg-zinc-50' };
    }
  };

  const catTheme = getCategoryTheme(quiz.categorySlug);

  return (
    <div className="bg-[#FFFFFF] border border-[#E7E9E5] hover:border-[#245747] rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-lg flex flex-col justify-between group relative overflow-hidden">
      {/* Top subtle decorative color bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#245747] via-[#F2C879] to-[#245747] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-extrabold tracking-wide uppercase px-2.5 py-0.5 rounded-full border ${getLevelBadgeClass(quiz.level)}`}>
              Level {quiz.level}
            </span>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${catTheme.tag}`}>
              {catTheme.label}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-[#69736D]">
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#69736D]" />
              {quiz.estimatedMinutes}m
            </span>
            <span className="flex items-center gap-1 font-medium">
              <HelpCircle className="w-3.5 h-3.5 text-[#69736D]" />
              {quiz.questions.length}Q
            </span>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#252B28] group-hover:text-[#245747] transition-colors leading-snug mb-2">
          {quiz.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#69736D] leading-relaxed line-clamp-2 mb-4">
          {quiz.shortDescription}
        </p>
      </div>

      <div className="pt-3 border-t border-[#E7E9E5]/80 flex items-center justify-between">
        <span className="text-[11px] text-[#A3ABA5] font-medium flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#F2C879]" /> Free Practice
        </span>
        <button
          onClick={() => navigate(getCategoryPath(quiz.categorySlug))}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FAF9F6] bg-[#245747] hover:bg-[#1b4336] transition-all px-3.5 py-1.5 rounded-xl shadow-xs group-hover:shadow-sm transform active:scale-95"
          aria-label={`Start ${quiz.title}`}
        >
          <span>Start Quiz</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
