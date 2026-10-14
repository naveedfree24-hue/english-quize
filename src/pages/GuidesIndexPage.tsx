import React from 'react';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { guides } from '../data/guides';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface GuidesIndexPageProps {
  navigate: (href: string) => void;
}

export function GuidesIndexPage({ navigate }: GuidesIndexPageProps) {
  return (
    <div className="space-y-10">
      <SeoHead
        title="English Learning Guides – Grammar Rules, Mistakes & Explanations"
        description="Clear, in-depth English educational guides. Understand verb tenses, prepositions, articles, and practical vocabulary strategies with easy-to-follow examples."
        canonicalPath="/english-learning-guides/"
      />

      <Breadcrumbs items={[{ label: 'Learning Guides' }]} navigate={navigate} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245747] bg-[#DCE9DF] px-3 py-1 rounded-full">
          Educational Resources
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252B28] tracking-tight">
          Clear English Learning Guides
        </h1>
        <p className="text-sm sm:text-base text-[#69736D] leading-relaxed">
          While our quizzes test your practical skills, these guides provide the foundational explanations. Each guide explains the reasoning behind the rules, highlights common traps, and provides verified examples you can use right away.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="bg-[#FFFFFF] border border-[#E7E9E5] hover:border-[#245747]/40 rounded-2xl p-6 sm:p-7 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#69736D]">
                <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#DCE9DF] text-[#245747]">
                  Level {guide.level}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readingMinutes} min read
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#252B28] group-hover:text-[#245747] transition-colors leading-snug">
                {guide.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#69736D] leading-relaxed line-clamp-3">
                {guide.introSummary}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E7E9E5] flex items-center justify-between">
              <span className="text-[11px] text-[#A3ABA5]">Updated {guide.lastUpdated}</span>
              <button
                onClick={() => navigate(`/english-learning-guides/${guide.slug}/`)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245747] group-hover:translate-x-0.5 transition-transform"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
