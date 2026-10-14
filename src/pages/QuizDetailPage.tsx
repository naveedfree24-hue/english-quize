import React from 'react';
import { Clock, HelpCircle, ArrowRight, BookOpen, AlertCircle, Sparkles, HelpCircle as FaqIcon } from 'lucide-react';
import { Quiz } from '../types';
import { categories } from '../data/categories';
import { quizzes, getQuizBySlug } from '../data/quizzes';
import { QuizEngine } from '../components/QuizEngine';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { AdPlacement } from '../components/AdPlacement';
import { affiliateResources } from '../data/affiliates';
import { AffiliateCard } from '../components/AffiliateCard';

interface QuizDetailPageProps {
  quiz: Quiz;
  navigate: (href: string) => void;
}

export function QuizDetailPage({ quiz, navigate }: QuizDetailPageProps) {
  const category = categories[quiz.categorySlug];

  // Schema.org Quiz structured data
  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: quiz.title,
    description: quiz.fullDescription,
    educationalLevel: quiz.level,
    timeRequired: `PT${quiz.estimatedMinutes}M`,
    about: {
      '@type': 'Thing',
      name: quiz.title,
    },
    hasPart: quiz.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      text: q.question,
      suggestedAnswer: q.options.map((opt, i) => ({
        '@type': 'Answer',
        text: opt,
        position: i + 1,
      })),
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.options[q.correctIndex],
        comment: {
          '@type': 'Comment',
          text: q.explanation,
        },
      },
    })),
  };

  const relatedQuizzes = quiz.relatedQuizSlugs
    .map((slug) => getQuizBySlug(slug))
    .filter((q): q is Quiz => !!q);

  return (
    <article className="space-y-8 sm:space-y-12">
      <SeoHead
        title={quiz.title}
        description={quiz.fullDescription}
        canonicalPath={`/${quiz.categorySlug}/${quiz.slug}/`}
        schema={quizSchema}
      />

      <Breadcrumbs
        items={[
          { label: category?.name || 'Quizzes', href: `/${quiz.categorySlug}/` },
          { label: quiz.title },
        ]}
        navigate={navigate}
      />

      {/* Above the Quiz: Visual Hero Header (Mobile-Optimized & Desktop Split) */}
      <header className="bg-[#FFFFFF] border-2 border-emerald-100 rounded-3xl p-5 sm:p-8 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full shadow-2xs">
                Level {quiz.level}
              </span>
              <span className="text-xs font-bold text-[#245747] bg-[#DCE9DF] border border-[#C5D9CA] px-3 py-1 rounded-full">
                {category?.name || 'Practice Quiz'}
              </span>
              <span className="text-xs font-medium text-[#69736D] flex items-center gap-1 bg-white border border-[#E7E9E5] px-2.5 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 text-amber-500" /> ~{quiz.estimatedMinutes} mins
              </span>
              <span className="text-xs font-medium text-[#69736D] flex items-center gap-1 bg-white border border-[#E7E9E5] px-2.5 py-1 rounded-full">
                <HelpCircle className="w-3.5 h-3.5 text-teal-600" /> {quiz.questions.length} Qs
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#252B28] tracking-tight leading-tight">
              {quiz.title}
            </h1>

            <p className="text-sm sm:text-base text-[#69736D] leading-relaxed">
              {quiz.fullDescription}
            </p>
          </div>

          {/* Exercise Thematic Graphic Thumbnail */}
          {quiz.imagePath && (
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[280px] sm:max-w-none aspect-square rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-md relative group">
                <img
                  src={quiz.imagePath}
                  alt={quiz.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                    Exercise Topic Visual
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Interactive Quiz Engine (With mobile-optimized controls) */}
      <section aria-label="Interactive Quiz">
        <QuizEngine
          quiz={quiz}
          onNavigateCategory={() => navigate(`/${quiz.categorySlug}/`)}
          onNavigateQuiz={(targetSlug) => {
            const target = getQuizBySlug(targetSlug);
            if (target) {
              navigate(`/${target.categorySlug}/${target.slug}/`);
            }
          }}
        />
      </section>

      {/* Disabled-by-default ad placeholder */}
      <AdPlacement slotType="postQuiz" />

      {/* Substantial Educational Content Below the Interaction */}
      <section className="space-y-8 sm:space-y-10 pt-4 border-t border-[#E7E9E5]">
        {/* Overview & Audience */}
        <div className="bg-[#FFFFFF] border border-[#E7E9E5] rounded-2xl p-5 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-[#252B28] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#245747]" />
            <span>Topic Overview & Target Level</span>
          </h2>
          <p className="text-sm text-[#252B28] leading-relaxed">
            {quiz.educationalContent.overview}
          </p>
          <div className="p-3 bg-[#FAF9F6] border border-[#E7E9E5] rounded-xl text-xs text-[#69736D]">
            <strong>Recommended for:</strong> {quiz.educationalContent.targetAudience}
          </div>
        </div>

        {/* Key Rules and Examples */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-[#252B28]">
            Key Rules & Examples to Remember
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quiz.educationalContent.keyRules.map((kr, idx) => (
              <div key={idx} className="bg-[#FFFFFF] border border-[#E7E9E5] p-5 rounded-xl space-y-2">
                <h3 className="text-sm font-bold text-[#245747]">{kr.rule}</h3>
                <p className="text-xs sm:text-sm text-[#252B28] font-mono bg-[#FAF9F6] p-2.5 rounded-lg border border-[#E7E9E5]/60">
                  {kr.example}
                </p>
                {kr.note && <p className="text-xs text-[#69736D]">{kr.note}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes Table (Optimized for Mobile Scrolling) */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-[#252B28] flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#B93826]" />
            <span>Common Mistakes and Pitfalls</span>
          </h2>
          <div className="overflow-x-auto bg-[#FFFFFF] border border-[#E7E9E5] rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm min-w-[320px]">
              <thead className="bg-[#FAF9F6] border-b border-[#E7E9E5] text-[#69736D]">
                <tr>
                  <th className="p-3.5 sm:p-4 font-bold">Incorrect Usage</th>
                  <th className="p-3.5 sm:p-4 font-bold">Correct English</th>
                  <th className="p-3.5 sm:p-4 font-bold">Why?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7E9E5]">
                {quiz.educationalContent.commonMistakes.map((cm, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9F6]/50">
                    <td className="p-3.5 sm:p-4 text-[#B93826] font-medium">{cm.incorrect}</td>
                    <td className="p-3.5 sm:p-4 text-[#245747] font-semibold">{cm.correct}</td>
                    <td className="p-3.5 sm:p-4 text-[#69736D]">{cm.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        {quiz.educationalContent.faqs && quiz.educationalContent.faqs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#252B28] flex items-center gap-2">
              <FaqIcon className="w-5 h-5 text-[#245747]" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-3">
              {quiz.educationalContent.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#FFFFFF] border border-[#E7E9E5] p-5 rounded-xl space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#252B28]">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-[#69736D] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Reference Material */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-[#252B28]">Recommended Reference Material:</h3>
          <AffiliateCard resource={affiliateResources[0]} />
        </div>

        {/* Related Quizzes Navigation */}
        {relatedQuizzes.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-[#E7E9E5]">
            <h2 className="text-lg font-bold text-[#252B28]">Related Quizzes to Try Next</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedQuizzes.map((rq) => (
                <div
                  key={rq.slug}
                  className="p-4 bg-[#FFFFFF] border border-[#E7E9E5] hover:border-[#245747] rounded-xl flex flex-col justify-between group transition-colors shadow-2xs"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#245747] bg-[#DCE9DF] px-2 py-0.5 rounded-full">
                      Level {rq.level}
                    </span>
                    <h3 className="text-sm font-bold text-[#252B28] group-hover:text-[#245747] mt-2 mb-1">
                      {rq.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => navigate(`/${rq.categorySlug}/${rq.slug}/`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#245747] mt-3"
                  >
                    <span>Practice this topic</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
