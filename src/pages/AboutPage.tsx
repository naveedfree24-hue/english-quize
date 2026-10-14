import React from 'react';
import { BookOpen, CheckCircle2, Heart, Award, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteConfig';

interface AboutPageProps {
  navigate: (href: string) => void;
}

export function AboutPage({ navigate }: AboutPageProps) {
  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <SeoHead
        title="About Clear English Quiz – Educational Mission & Standards"
        description="Learn about Clear English Quiz. Our mission is to provide free, transparent, and approachable English language practice for learners worldwide."
        canonicalPath="/about/"
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} navigate={navigate} />

      <header className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245747] bg-[#DCE9DF] px-3 py-1 rounded-full">
          About Clear English Quiz
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252B28] tracking-tight">
          Learning That Helps You Move Forward
        </h1>
        <p className="text-base sm:text-lg text-[#69736D] leading-relaxed">
          Clear English Quiz is designed to make English grammar and vocabulary practice approachable, reliable, and entirely free.
        </p>
      </header>

      <section className="space-y-4 text-sm sm:text-base text-[#252B28] leading-relaxed">
        <h2 className="text-xl font-bold text-[#252B28]">Our Mission</h2>
        <p>
          Learning a second language can feel overwhelming when explanations are full of confusing academic jargon, or when websites lock simple practice questions behind aggressive subscription paywalls.
        </p>
        <p>
          We created {siteConfig.brandName} with one guiding philosophy: <strong>learn from your mistakes with immediate, crystal-clear feedback</strong>. Every single question in our quizzes includes an in-depth explanation detailing not just which answer is correct, but why common alternatives fail in natural English.
        </p>
      </section>

      <section className="bg-[#FFFFFF] border border-[#E7E9E5] rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-[#252B28]">Our Editorial Principles</h2>
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#245747] shrink-0 mt-0.5" />
            <div>
              <strong>Verified Answers:</strong> Every question is written to test authentic international English without trick questions or ambiguous answer keys.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#245747] shrink-0 mt-0.5" />
            <div>
              <strong>Zero Account Barriers:</strong> All quizzes and guides are open and accessible to all visitors without requiring signups, logins, or credit cards.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#245747] shrink-0 mt-0.5" />
            <div>
              <strong>Calm, Focused Design:</strong> No intrusive popups, no autoplay audio, and no manipulative dark patterns. Just a quiet, focused space to practise.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 text-sm text-[#69736D] leading-relaxed bg-[#FAF9F6] border border-[#E7E9E5] p-6 rounded-2xl">
        <h3 className="font-bold text-[#252B28]">Honest Educational Notice</h3>
        <p>
          Clear English Quiz provides independent self-study practice materials. Our diagnostic quizzes and CEFR level labels (A2, B1, B2) are designed for personal benchmarking and do not constitute an official certification or accredited examination from Cambridge Assessment, British Council, IELTS, or TOEFL.
        </p>
      </section>

      <div className="pt-4 flex justify-center">
        <button
          onClick={() => navigate('/quizzes/')}
          className="bg-[#245747] hover:bg-[#1b4336] text-[#FAF9F6] font-semibold text-sm px-8 py-3 rounded-xl transition-all shadow-sm"
        >
          Explore All Practice Quizzes
        </button>
      </div>
    </div>
  );
}
