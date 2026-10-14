import React from 'react';
import { BookOpen, ArrowRight, CheckCircle2, Sparkles, Clock, HelpCircle } from 'lucide-react';
import { categories } from '../data/categories';
import { getQuizzesByCategory } from '../data/quizzes';
import { guides } from '../data/guides';
import { QuizCard } from '../components/QuizCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface CategoryPageProps {
  categorySlug: string;
  navigate: (href: string) => void;
}

export function CategoryPage({ categorySlug, navigate }: CategoryPageProps) {
  const category = categories[categorySlug];

  if (!category) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-[#252B28]">Category Not Found</h1>
        <button
          onClick={() => navigate('/quizzes/')}
          className="mt-4 text-sm font-semibold text-[#245747] underline"
        >
          Return to All Quizzes
        </button>
      </div>
    );
  }

  const categoryQuizzes = getQuizzesByCategory(categorySlug);
  const otherCategories = Object.values(categories).filter((c) => c.slug !== categorySlug);

  return (
    <div className="space-y-12 sm:space-y-16">
      <SeoHead
        title={`${category.name} – Free Practice Tests`}
        description={category.metaDescription}
        canonicalPath={`/${category.slug}/`}
      />

      <Breadcrumbs items={[{ label: category.name }]} navigate={navigate} />

      {/* Visual Category Banner Header with Image */}
      <div className="bg-[#FFFFFF] border-2 border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-md overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-2xs ${category.badgeColor || 'bg-emerald-100 text-emerald-800'}`}>
                {category.name}
              </span>
              <span className="text-xs font-semibold text-[#69736D] bg-zinc-100 px-3 py-1 rounded-full">
                {categoryQuizzes.length} Quizzes Available
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252B28] tracking-tight leading-tight">
              {category.headline}
            </h1>

            <p className="text-sm sm:text-base text-[#69736D] leading-relaxed">
              {category.introduction}
            </p>
          </div>

          {/* Visual Category Illustration Graphic */}
          {category.imagePath && (
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-md">
                <img
                  src={category.imagePath}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Key Learning Outcomes with Colorful Badges */}
      <div className="bg-gradient-to-r from-emerald-50/70 via-stone-50 to-teal-50/70 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <h2 className="text-base sm:text-lg font-extrabold text-[#252B28] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <span>What you will practise in this category:</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          {category.learningOutcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252B28] bg-white/80 p-3 rounded-xl border border-emerald-100/80 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="font-medium">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#252B28]">
              Available Quizzes ({categoryQuizzes.length})
            </h2>
            <p className="text-xs sm:text-sm text-[#69736D]">
              Choose any quiz below to start practicing with immediate feedback.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryQuizzes.map((quiz) => (
            <QuizCard key={quiz.slug} quiz={quiz} navigate={navigate} />
          ))}
        </div>
      </div>

      {/* Recommended Learning Guides for this Category */}
      <div className="bg-[#FFFFFF] border border-[#E7E9E5] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#252B28]">
              Supporting Learning Guides
            </h2>
            <p className="text-xs sm:text-sm text-[#69736D]">
              Need a refresher on the grammar rules? Read our step-by-step guides with examples.
            </p>
          </div>
          <button
            onClick={() => navigate('/english-learning-guides/')}
            className="text-xs font-bold text-[#245747] hover:underline hidden sm:inline"
          >
            All Guides
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {guides.slice(0, 2).map((guide) => (
            <div
              key={guide.slug}
              className="p-5 bg-[#FAF9F6] border border-[#E7E9E5] hover:border-emerald-300 rounded-2xl flex items-center justify-between transition-colors shadow-2xs"
            >
              <div>
                <h4 className="text-sm font-bold text-[#252B28]">{guide.title}</h4>
                <p className="text-xs text-[#69736D] mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {guide.readingMinutes} min read • Level {guide.level}
                </p>
              </div>
              <button
                onClick={() => navigate(`/english-learning-guides/${guide.slug}/`)}
                className="text-xs font-bold text-[#FAF9F6] bg-[#245747] hover:bg-[#1b4336] px-3.5 py-1.5 rounded-xl shrink-0 ml-3 transition-colors"
              >
                Read
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Related Categories Navigation */}
      <div className="pt-6 border-t border-[#E7E9E5] space-y-4">
        <h3 className="text-sm font-bold text-[#252B28]">Explore Other Practice Topics:</h3>
        <div className="flex flex-wrap gap-3">
          {otherCategories.map((c) => (
            <button
              key={c.slug}
              onClick={() => navigate(`/${c.slug}/`)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#245747] bg-[#FFFFFF] border border-[#E7E9E5] hover:border-emerald-400 hover:bg-emerald-50/50 px-4 py-2.5 rounded-xl transition-all shadow-2xs"
            >
              <span>{c.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
