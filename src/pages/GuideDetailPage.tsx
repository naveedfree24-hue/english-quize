import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, BookOpen, AlertCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { GuideArticle } from '../types';
import { getQuizBySlug } from '../data/quizzes';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { AdPlacement } from '../components/AdPlacement';
import { affiliateResources } from '../data/affiliates';
import { AffiliateCard } from '../components/AffiliateCard';

interface GuideDetailPageProps {
  guide: GuideArticle;
  navigate: (href: string) => void;
}

export function GuideDetailPage({ guide, navigate }: GuideDetailPageProps) {
  // Practice exercise answers reveal toggles
  const [revealedExercises, setRevealedExercises] = useState<Record<number, boolean>>({});

  const toggleReveal = (idx: number) => {
    setRevealedExercises((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Schema.org Article structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: '2026-10-01',
    dateModified: '2026-10-12',
    author: {
      '@type': 'Organization',
      name: 'Clear English Quiz Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Clear English Quiz',
      url: 'https://clearenglishquiz.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://clearenglishquiz.com/english-learning-guides/${guide.slug}/`,
    },
  };

  const relatedQuizzes = guide.relatedQuizSlugs
    .map((slug) => getQuizBySlug(slug))
    .filter((q) => !!q);

  return (
    <article className="space-y-10 sm:space-y-12 max-w-4xl mx-auto">
      <SeoHead
        title={guide.title}
        description={guide.metaDescription}
        canonicalPath={`/english-learning-guides/${guide.slug}/`}
        schema={articleSchema}
        ogType="article"
      />

      <Breadcrumbs
        items={[
          { label: 'Learning Guides', href: '/english-learning-guides/' },
          { label: guide.title },
        ]}
        navigate={navigate}
      />

      {/* Guide Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#69736D]">
          <span className="font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#DCE9DF] text-[#245747]">
            Level {guide.level}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {guide.readingMinutes} min read
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> Updated {guide.lastUpdated}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252B28] tracking-tight leading-tight">
          {guide.title}
        </h1>

        {/* Concise Quick Answer Box (AI-Search & Quick Reader Friendly) */}
        <div className="p-5 sm:p-6 bg-[#FAF9F6] border-l-4 border-[#245747] rounded-r-xl border-y border-r border-[#E7E9E5] space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#245747]">
            Key Takeaway Summary
          </span>
          <p className="text-sm sm:text-base text-[#252B28] leading-relaxed font-medium">
            {guide.introSummary}
          </p>
        </div>
      </header>

      {/* Main Educational Sections */}
      <div className="space-y-10 text-[#252B28] leading-relaxed">
        {guide.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#252B28] pt-2">
              {section.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#252B28] leading-relaxed whitespace-pre-line">
              {section.content}
            </p>

            {/* Comparison Table if present */}
            {section.table && (
              <div className="overflow-x-auto bg-[#FFFFFF] border border-[#E7E9E5] rounded-xl my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF9F6] border-b border-[#E7E9E5] text-[#245747]">
                    <tr>
                      {section.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3.5 sm:p-4 font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E9E5]">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#FAF9F6]/40">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3.5 sm:p-4 text-[#252B28] font-medium">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Verified Examples */}
            {section.examples && section.examples.length > 0 && (
              <div className="space-y-2.5 pt-2">
                {section.examples.map((ex, exIdx) => (
                  <div
                    key={exIdx}
                    className="p-3.5 bg-[#FFFFFF] border border-[#E7E9E5] rounded-xl text-xs sm:text-sm space-y-1"
                  >
                    <p className="font-semibold text-[#245747]">✓ {ex.sentence}</p>
                    <p className="text-xs text-[#69736D]">{ex.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Ad slot in long guide (disabled by default) */}
        <AdPlacement slotType="inArticle" />

        {/* Common Mistakes Section */}
        {guide.commonMistakes.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-[#E7E9E5]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#252B28] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#B93826]" />
              <span>Common Mistakes to Avoid</span>
            </h2>
            <div className="space-y-3">
              {guide.commonMistakes.map((cm, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#FFFFFF] border border-[#E7E9E5] rounded-xl text-xs sm:text-sm space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <p className="text-[#B93826] font-medium">❌ {cm.incorrect}</p>
                    <p className="text-[#245747] font-semibold">✓ {cm.correct}</p>
                  </div>
                  <p className="text-xs text-[#69736D] bg-[#FAF9F6] p-2.5 rounded-lg border border-[#E7E9E5]/60">
                    <strong>Rule note:</strong> {cm.tip}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Practical Exercises with Answer Toggles */}
        {guide.practiceExercises && guide.practiceExercises.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-[#E7E9E5]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#252B28] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#245747]" />
              <span>Quick Practice Check</span>
            </h2>
            <div className="space-y-3">
              {guide.practiceExercises.map((ex, idx) => {
                const isRevealed = revealedExercises[idx];
                return (
                  <div key={idx} className="p-4 bg-[#FAF9F6] border border-[#E7E9E5] rounded-xl space-y-3">
                    <p className="text-sm font-semibold text-[#252B28]">{ex.prompt}</p>
                    <div className="flex flex-wrap gap-2">
                      {ex.options.map((opt, optIdx) => (
                        <span
                          key={optIdx}
                          className="px-2.5 py-1 bg-[#FFFFFF] border border-[#E7E9E5] rounded-lg text-xs font-medium text-[#252B28]"
                        >
                          {opt}
                        </span>
                      ))}
                    </div>
                    <div className="pt-1">
                      <button
                        onClick={() => toggleReveal(idx)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#245747] hover:underline"
                      >
                        {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        <span>{isRevealed ? 'Hide Answer' : 'Check Correct Answer'}</span>
                      </button>
                      {isRevealed && (
                        <div className="mt-2 p-3 bg-[#FFFFFF] border border-[#C5D9CA] rounded-lg text-xs space-y-1">
                          <p className="font-bold text-[#245747]">Answer: {ex.correctAnswer}</p>
                          <p className="text-[#69736D]">{ex.hint}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Educational Reference Recommendation */}
        <section className="space-y-3 pt-4 border-t border-[#E7E9E5]">
          <h3 className="text-base font-bold text-[#252B28]">Recommended Educational Resource</h3>
          <AffiliateCard resource={affiliateResources[1]} />
        </section>

        {/* Related Quizzes Navigation */}
        {relatedQuizzes.length > 0 && (
          <section className="p-6 bg-[#FFFFFF] border border-[#E7E9E5] rounded-2xl space-y-4">
            <h2 className="text-lg font-bold text-[#252B28]">
              Ready to test what you learned in this guide?
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedQuizzes.map((rq) => (
                <button
                  key={rq!.slug}
                  onClick={() => navigate(`/${rq!.categorySlug}/${rq!.slug}/`)}
                  className="inline-flex items-center gap-2 bg-[#245747] text-[#FAF9F6] hover:bg-[#1b4336] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Take the {rq!.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
