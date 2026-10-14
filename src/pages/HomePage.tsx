import React from 'react';
import {
  BookOpen,
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Compass,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { quizzes } from '../data/quizzes';
import { guides } from '../data/guides';
import { categories } from '../data/categories';
import { QuizCard } from '../components/QuizCard';
import { SeoHead } from '../components/SeoHead';

interface HomePageProps {
  navigate: (href: string) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  // Featured selection of 6 quizzes
  const featuredQuizzes = quizzes.slice(0, 6);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-700" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-amber-700" />;
      case 'Award':
        return <Award className="w-5 h-5 text-teal-700" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-700" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      <SeoHead
        title="Clear English Quiz – Free English Grammar & Vocabulary Practice"
        description="Practise English grammar, grow your vocabulary and understand your mistakes with friendly quizzes and clear explanations. Learn at your own pace."
        canonicalPath="/"
      />

      {/* Hero Section with Split Illustration */}
      <section className="pt-4 sm:pt-10 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-extrabold tracking-wider uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>YOUR FREE ENGLISH LEARNING SPACE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#252B28] tracking-tight leading-tight">
              Build Your English Skills, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#245747] via-emerald-700 to-teal-800">
                One Quiz at a Time.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#69736D] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Practise English grammar, grow your vocabulary and understand your mistakes with friendly quizzes and clear explanations. Learn at your own pace and discover what to practise next.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => navigate('/quizzes/')}
                className="w-full sm:w-auto bg-[#245747] hover:bg-[#1b4336] text-[#FAF9F6] font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#245747] flex items-center justify-center gap-2"
              >
                <span>Explore Free Quizzes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/english-grammar-quizzes/')}
                className="w-full sm:w-auto bg-[#FFFFFF] hover:bg-emerald-50/50 text-[#245747] border-2 border-emerald-200/80 hover:border-emerald-500 font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all shadow-2xs focus:ring-2 focus:ring-[#245747]"
              >
                Start a Grammar Quiz
              </button>
            </div>

            {/* 3 Core Benefits Chips */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="bg-[#FFFFFF] border border-[#E7E9E5] hover:border-emerald-300 p-3.5 rounded-xl flex items-start gap-2.5 transition-colors shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#252B28]">Practical Practice</h4>
                  <p className="text-[11px] text-[#69736D]">Real contexts & daily examples</p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E7E9E5] hover:border-amber-300 p-3.5 rounded-xl flex items-start gap-2.5 transition-colors shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#252B28]">Clear Explanations</h4>
                  <p className="text-[11px] text-[#69736D]">Understand why answers work</p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E7E9E5] hover:border-teal-300 p-3.5 rounded-xl flex items-start gap-2.5 transition-colors shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#252B28]">At Your Pace</h4>
                  <p className="text-[11px] text-[#69736D]">No login, 100% free</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Illustration Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Background ambient color splash */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-200/50 via-amber-100/40 to-teal-200/50 rounded-3xl blur-xl opacity-80" />

              <div className="relative bg-[#FFFFFF] border-2 border-emerald-100 rounded-3xl p-3 shadow-xl overflow-hidden">
                <img
                  src="/images/hero_english_learning.jpg"
                  alt="Students enthusiastically learning English grammar and vocabulary together"
                  className="w-full h-auto rounded-2xl object-cover shadow-sm hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Floating achievement badges */}
                <div className="absolute top-6 left-6 bg-[#FFFFFF]/95 backdrop-blur-md border border-emerald-200 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-emerald-900">
                    100+ Verified Questions
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-md border border-amber-200 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-extrabold text-amber-900">
                    AI Practice Assistant Included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Discovery Categories with Visual Cards */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>EXPLORE CATEGORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B28]">
            Find Your Next English Quiz
          </h2>
          <p className="text-sm text-[#69736D]">
            Choose a topic and start practising right away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.values(categories).map((cat) => (
            <div
              key={cat.slug}
              className="bg-[#FFFFFF] border border-[#E7E9E5] hover:border-[#245747] rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Category Illustration */}
                {cat.imagePath ? (
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100">
                    <img
                      src={cat.imagePath}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className={`absolute bottom-3 left-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-xs ${cat.badgeColor || 'bg-white text-zinc-800'}`}>
                      {cat.name.replace('English ', '')}
                    </span>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center m-5">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                )}

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-[#252B28] group-hover:text-[#245747] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#69736D] leading-relaxed line-clamp-2">
                    {cat.introduction}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => navigate(`/${cat.slug}/`)}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#245747] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 py-2.5 rounded-xl transition-colors group-hover:translate-x-0.5"
                >
                  <span>Browse Quizzes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Practice Generator Feature Spotlight (Colorful Modern Banner) */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b4336] via-[#245747] to-teal-900 p-7 sm:p-12 text-[#FAF9F6] shadow-xl border border-emerald-700/50">
        {/* Background glow orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-[#DCE9DF] text-xs font-extrabold border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>POWERED BY GOOGLE GEMINI AI • 100% FREE</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF9F6] tracking-tight leading-tight">
              Practise ANY English Topic <br className="hidden sm:inline" />
              with Custom AI Quizzes
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl leading-relaxed">
              Need practice on irregular verbs, job interview idioms, phrasal verbs with "look", or modal verbs of deduction? Our integrated AI English Tutor generates custom 5-question tests with memory tips in seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-emerald-200">
              <span className="bg-white/10 px-2.5 py-1 rounded-lg">✓ Instant Custom Questions</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-lg">✓ CEFR Level Tuning</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-lg">✓ Memory Tips</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center gap-3">
            <button
              onClick={() => navigate('/ai-quiz-generator/')}
              className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-extrabold text-sm px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-zinc-950" />
              <span>Try AI Quiz Generator</span>
            </button>
            <span className="text-[11px] text-emerald-200/80 font-medium">No account or credit card needed</span>
          </div>
        </div>
      </section>

      {/* Featured Quizzes with Colorful Cards */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              <span>POPULAR PRACTICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B28]">
              Popular English Practice Topics
            </h2>
            <p className="text-sm text-[#69736D]">
              Carefully curated quizzes testing essential grammar and vocabulary rules.
            </p>
          </div>
          <button
            onClick={() => navigate('/quizzes/')}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#245747] hover:underline"
          >
            <span>View All {quizzes.length} Quizzes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredQuizzes.map((quiz) => (
            <QuizCard key={quiz.slug} quiz={quiz} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* Educational Learning Guides Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-teal-600" />
              <span>LESSONS & GUIDES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B28]">
              Understand English More Clearly
            </h2>
            <p className="text-sm text-[#69736D]">
              Our guides teach the underlying rules, while the quizzes help you practise applying them.
            </p>
          </div>
          <button
            onClick={() => navigate('/english-learning-guides/')}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#245747] hover:underline"
          >
            <span>Browse All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guides.map((guide) => (
            <div
              key={guide.slug}
              className="bg-[#FFFFFF] border border-[#E7E9E5] hover:border-emerald-500 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-[#69736D] mb-3">
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Level {guide.level}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium text-[#69736D]">
                    <Clock className="w-3.5 h-3.5" /> {guide.readingMinutes} min read
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#252B28] group-hover:text-[#245747] transition-colors mb-2">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#69736D] leading-relaxed line-clamp-2 mb-4">
                  {guide.introSummary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E7E9E5] flex items-center justify-between">
                <span className="text-[11px] text-[#A3ABA5]">Practical examples included</span>
                <button
                  onClick={() => navigate(`/english-learning-guides/${guide.slug}/`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#245747] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works Section (Visual Steps) */}
      <section className="bg-[#FFFFFF] border border-[#E7E9E5] rounded-3xl p-6 sm:p-12 text-center space-y-8 shadow-sm">
        <div className="max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <span>EASY 3-STEP LEARNING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B28]">
            A Simple Way to Practise
          </h2>
          <p className="text-sm text-[#69736D]">
            Three easy steps to strengthen your English every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-[#FAF9F6] font-extrabold text-base flex items-center justify-center shadow-xs">
              1
            </div>
            <h3 className="font-bold text-base text-[#252B28]">Choose a Topic</h3>
            <p className="text-xs text-[#69736D] leading-relaxed">
              Pick a grammar tense, preposition test, vocabulary quiz, or business module suited to your level.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-700 text-[#FAF9F6] font-extrabold text-base flex items-center justify-center shadow-xs">
              2
            </div>
            <h3 className="font-bold text-base text-[#252B28]">Answer the Questions</h3>
            <p className="text-xs text-[#69736D] leading-relaxed">
              Tackle authentic multiple-choice questions one at a time with instant feedback on each choice.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-[#FAF9F6] font-extrabold text-base flex items-center justify-center shadow-xs">
              3
            </div>
            <h3 className="font-bold text-base text-[#252B28]">Review Explanations</h3>
            <p className="text-xs text-[#69736D] leading-relaxed">
              Study the educational explanations to understand the grammar rules and eliminate future mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Trust and About Section */}
      <section className="bg-gradient-to-r from-emerald-50/70 via-stone-50 to-teal-50/70 border border-emerald-200/60 rounded-3xl p-6 sm:p-10 space-y-4 max-w-3xl mx-auto text-center shadow-xs">
        <h2 className="text-2xl font-extrabold text-[#252B28]">
          Learning That Helps You Move Forward
        </h2>
        <p className="text-sm text-[#69736D] leading-relaxed">
          Clear English Quiz is designed to make English practice approachable and useful. Our goal is to help learners build confidence through carefully written questions, understandable explanations and practical learning resources.
        </p>
        <div className="pt-2">
          <button
            onClick={() => navigate('/about/')}
            className="text-xs font-bold text-[#245747] hover:underline inline-flex items-center gap-1.5"
          >
            <span>Learn more about our educational mission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center space-y-4 pt-4 pb-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#252B28]">
          Ready to Practise?
        </h2>
        <p className="text-sm text-[#69736D] max-w-md mx-auto">
          Choose a quiz, learn something new and take your next step in English.
        </p>
        <div className="pt-2">
          <button
            onClick={() => navigate('/quizzes/')}
            className="bg-[#245747] hover:bg-[#1b4336] text-[#FAF9F6] font-bold text-sm sm:text-base px-9 py-4 rounded-xl transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#245747]"
          >
            Browse All Quizzes
          </button>
        </div>
      </section>
    </div>
  );
}
